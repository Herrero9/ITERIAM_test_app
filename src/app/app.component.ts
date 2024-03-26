
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from './shared/shared.module';

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

  public loaded = false;

  private totalIds = 4000;
  private lastId = 0;
  private ID_FOTO_INCREMENTAL = 0;
  public urlArray: string[] = []

  ngOnInit() {
    this.loaded = false;
   
    this.loaded = true;
    
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event:any){
    // console.log(event);

    // this.loadImages()
  }

  loadImages(){

  }

}
