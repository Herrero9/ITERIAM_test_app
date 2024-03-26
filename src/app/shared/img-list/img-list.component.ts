import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Photo } from '../Models/models';

@Component({
  selector: 'app-img-list',
  templateUrl: './img-list.component.html',
  styleUrls: ['./img-list.component.scss'],
  providers: [SharedService]
})
export class ImgListComponent implements OnInit {

  imgArray: Photo[] = [];

  partialImgLoad: Photo[] = [];

  constructor(private _sharedService: SharedService) { }

  ngOnInit() {
      this._sharedService.populateArray()
      this.imgArray = JSON.parse(this._sharedService.generateImgJson());
      console.log(this.imgArray);
    
      for(let i = 0; i < 10; i++){
        this.partialImgLoad.push(this.imgArray[i]);
      }
    
  }

}
