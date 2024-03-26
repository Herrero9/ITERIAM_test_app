import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { ImgListComponent } from './img-list/img-list.component';
import { SharedService } from './shared.service';


@NgModule({
  imports: [
    CommonModule
  ],
  exports:[
    ImgListComponent
  ],
  declarations: [HeaderComponent, ImgListComponent],
  providers: [SharedService]
})
export class SharedModule { }
