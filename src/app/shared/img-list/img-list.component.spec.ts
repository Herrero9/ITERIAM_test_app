/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ImgListComponent } from './img-list.component';
import { ImgCardComponent } from '../img-card/img-card.component';
import { SharedService } from '../shared.service';
import { SharedModule } from '../shared.module';
import { Photo } from '../Models/models';

describe('ImgListComponent', () => {
  let imgList: Photo[] = [{
    id: 1,
    photo: 'https://picsum.photos/id/1/500/500.jpg',
    text: 'Photo Description 1'
  }, 
  {
    id: 2,
    photo: 'https://picsum.photos/id/2/500/500.jpg',
    text: 'Photo Description 2'
  }, 
  {
    id: 3,
    photo: 'https://picsum.photos/id/3/500/500.jpg',
    text: 'Photo Description 3'
  },
  {
    id: 3,
    photo: 'https://picsum.photos/id/3/500/500.jpg',
    text: 'Photo Description 3'
  },
  {
    id: 3,
    photo: 'https://picsum.photos/id/3/500/500.jpg',
    text: 'Photo Description 3'
  },
  {
    id: 3,
    photo: 'https://picsum.photos/id/3/500/500.jpg',
    text: 'Photo Description 3'
  },
  {
    id: 3,
    photo: 'https://picsum.photos/id/3/500/500.jpg',
    text: 'Photo Description 3'
  },
  {
    id: 3,
    photo: 'https://picsum.photos/id/3/500/500.jpg',
    text: 'Photo Description 3'
  },
  {
    id: 3,
    photo: 'https://picsum.photos/id/3/500/500.jpg',
    text: 'Photo Description 3'
  },
  {
    id: 3,
    photo: 'https://picsum.photos/id/3/500/500.jpg',
    text: 'Photo Description 3'
  },
  {
    id: 3,
    photo: 'https://picsum.photos/id/3/500/500.jpg',
    text: 'Photo Description 3'
  },
  {
    id: 3,
    photo: 'https://picsum.photos/id/3/500/500.jpg',
    text: 'Photo Description 3'
  },
  {
    id: 3,
    photo: 'https://picsum.photos/id/3/500/500.jpg',
    text: 'Photo Description 3'
  },
  {
    id: 3,
    photo: 'https://picsum.photos/id/3/500/500.jpg',
    text: 'Photo Description 3'
  },
  {
    id: 3,
    photo: 'https://picsum.photos/id/3/500/500.jpg',
    text: 'Photo Description 3'
  },
  {
    id: 3,
    photo: 'https://picsum.photos/id/3/500/500.jpg',
    text: 'Photo Description 3'
  },
  {
    id: 3,
    photo: 'https://picsum.photos/id/3/500/500.jpg',
    text: 'Photo Description 3'
  },
  {
    id: 3,
    photo: 'https://picsum.photos/id/3/500/500.jpg',
    text: 'Photo Description 3'
  }];

  let component: ImgListComponent;
  let fixture: ComponentFixture<ImgListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [ ImgListComponent ],
      providers: [{provide: SharedService , useValue: SharedService}],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgListComponent);
    component = fixture.componentInstance;
    component.imgArray = imgList;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
