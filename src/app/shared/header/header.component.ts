import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Photo } from '../Models/models';
import { FilterPipe } from '../Pipes/filter.pipe';
import { FormControl, FormGroup } from '@angular/forms';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  providers: [FilterPipe],
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() imgArray: Photo[] = [];
  @Output() filteredImages: EventEmitter<Photo[]> = new EventEmitter<Photo[]>();
  
  imgArrayCopy: Photo[] = [];

  openInput = false;

  filterForm = new FormGroup({ 
    inputText: new FormControl(''),
    inputNumber: new FormControl('')
   });

  constructor(private filterPipe: FilterPipe, private _sharedService: SharedService) { }

  ngOnInit() {
    this.imgArrayCopy = [...this.imgArray];
  }

  filterImages() {
    if(this.filterForm.value.inputText){
      this.imgArrayCopy = this.filterPipe.transform(this.imgArray, this.filterForm.value.inputText);
    }
    if(this.filterForm.value.inputNumber !== undefined && this.filterForm.value.inputNumber !== null){
      let idToFilter = parseInt(this.filterForm.value.inputNumber);
      this.imgArrayCopy = this.imgArray.filter(img => img.id === idToFilter);
    }

    this.filteredImages.emit(this.imgArrayCopy);
  }

  clearFilter() {
    this.imgArray = JSON.parse(this._sharedService.generateImgJson());
    this.filteredImages.emit(this.imgArray);
  }



}
