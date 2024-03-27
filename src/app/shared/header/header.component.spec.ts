/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HeaderComponent } from './header.component';
import { SharedService } from '../shared.service';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Photo } from '../Models/models';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  const formBuilder: FormBuilder = new FormBuilder();

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


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [ReactiveFormsModule],
      providers: [SharedService, { provide: FormBuilder, useValue: formBuilder }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    component.filterForm = formBuilder.group({
      inputText: '',
      inputNumber: ''
    }); 
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call filterImages', () => {
    component.imgArray = imgList;
    component.filterForm.controls['inputText'].setValue('Photo Description 1');
    component.filterForm.controls['inputNumber'].setValue("1");
    spyOn(component, 'filterImages');
    const button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    expect(component.filterImages).toHaveBeenCalled();
  });
});
