import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-img-card',
  templateUrl: './img-card.component.html',
  styleUrls: ['./img-card.component.scss']
})
export class ImgCardComponent implements OnInit {

  @Input() img: any;
  @Input() text: string = '';
  @Input() lazy: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
