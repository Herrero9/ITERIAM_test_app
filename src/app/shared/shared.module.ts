import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedService } from './shared.service';

import { HeaderComponent } from './header/header.component';
import { ImgListComponent } from './img-list/img-list.component';
import { ImgCardComponent } from './img-card/img-card.component';


@NgModule({
  imports: [
    CommonModule
  ],
  exports:[
    ImgListComponent,
    HeaderComponent
  ],
  declarations: [
    HeaderComponent, 
    ImgListComponent,
    ImgCardComponent
  ],
  providers: [SharedService]
})
export class SharedModule { }
