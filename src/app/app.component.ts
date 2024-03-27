
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { SharedService } from './shared/shared.service';
import { Photo } from './shared/Models/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    RouterOutlet, 
    CommonModule, 
    NgOptimizedImage,
    SharedModule],
  standalone: true,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'test_app';

  scrollEnd: boolean = false;

  imgArray: Photo[] = [];

  completeImgArray: Photo[] = [];


  constructor(private _sharedService: SharedService) {
  } 

  ngOnInit() {
    this._sharedService.populateArray()
    this.imgArray = JSON.parse(this._sharedService.generateImgJson());
    this.completeImgArray = [...this.imgArray];
  }

  getFilteredImages(filteredImages: Photo[]) {
    this.imgArray = [...filteredImages];
  }

}
