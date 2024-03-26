
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, NgOptimizedImage],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'test_app';

  loaded = false;

  ID_FOTO_INCREMENTAL = 0;
  urlArray: string[] = []

  ngOnInit() {
    this.loaded = false;
    for(let i = 0; i <= 4000; i++){
      this.ID_FOTO_INCREMENTAL = i;
      this.urlArray.push(`https://picsum.photos/id/${this.ID_FOTO_INCREMENTAL}/500/500.jpg`);
    }
    this.loaded = true
  }


}
