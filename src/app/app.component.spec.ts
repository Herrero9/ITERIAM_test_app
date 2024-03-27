import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { SharedService } from './shared/shared.service';
import { Photo } from './shared/Models/models';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let sharedService: SharedService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [SharedService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    sharedService = TestBed.inject(SharedService);
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should have a title', () => {
    expect(component.title).toBeDefined();
  });

  it('should have scrollEnd set to false by default', () => {
    expect(component.scrollEnd).toBeFalse();
  });

  it('should have empty imgArray by default', () => {
    expect(component.imgArray).toEqual([]);
  });

  it('should have empty completeImgArray by default', () => {
    expect(component.completeImgArray).toEqual([]);
  });

  it('should call getFilteredImages method with filtered images', () => {
    const filteredImages: Photo[] = [{
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
    spyOn(component, 'getFilteredImages');
    component.ngOnInit();
    expect(component.getFilteredImages).toHaveBeenCalledWith(filteredImages);
  });
});
