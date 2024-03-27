import { ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import { SharedService } from '../shared.service';
import { Photo } from '../Models/models';

@Component({
  selector: 'app-img-list',
  templateUrl: './img-list.component.html',
  styleUrls: ['./img-list.component.scss'],
  providers: [SharedService]
})
export class ImgListComponent implements OnInit {
  @Input() imgArray: Photo[] = [];

  imgArrayCopy: Photo[] = [];

  partialImgLoad: Photo[] = [];

  lastImg: number = 0;
  
  loaded: boolean = false;
  scrolled: boolean = false;
  
  constructor(private ref: ChangeDetectorRef) { }

  ngOnInit() {
    this.loaded = false;
    this.imgArrayCopy = [...this.imgArray]
    for(let i = 0; i < 10; i++){
      this.partialImgLoad.push(this.imgArrayCopy[i]);
      this.lastImg = i;
    }
    this.loaded = true;
  }

  ngOnChanges(){
    this.loaded = false;
    this.imgArrayCopy = [...this.imgArray];
    this.partialImgLoad = [];
    for(let i = 0; i < 10; i++){
      if(this.imgArrayCopy[i]){
        this.partialImgLoad.push(this.imgArrayCopy[i]);
        this.lastImg = i;
      }
    }
    
    this.loaded = true;
  }


  onScroll(event:any){
    // altura visible + pixeles desplazados >= altura total 
    if ((event.target.offsetHeight + event.target.scrollTop >= event.target.scrollHeight)
    && (this.loaded == true) && (this.lastImg < this.imgArray.length - 1) && (!this.scrolled)){
      this.scrolled = true;
      this.loadMoreImages();
    }
    
  }

  loadMoreImages(){
    this.loaded = false;
  
    //total de imagenes a cargar 
    let index = this.lastImg + 11;

    //bucle que carga 10 imagenes mas
    for(let i = this.lastImg + 1; i < index; i++){
      if(i < this.imgArray.length){
        this.partialImgLoad.push(this.imgArrayCopy[i]);
        this.lastImg = i;
      }
    }
    
    this.ref.detectChanges();
    this.loaded = true;
    this.scrolled = false;
    
  }

  // deleteLastImg(){
  //   this.loaded = false
  //   console.log(this.partialImgLoad);
  //   let index = this.lastImg - 10;
  //  if(this.lastImg > 10){
  //   for(let i = this.lastImg; i > index; i--){
  //     this.partialImgLoad.pop();
  //     this.lastImg--;
  //   }
  //  }
  //   console.log(this.partialImgLoad);
  //   this.loaded = true;
  //   this.scrolled = false;
  // }

  
}
