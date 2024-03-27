import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { SharedService } from './shared/shared.service';

describe('AppComponent', () => {
  let sharedService: SharedService;
  beforeEach(async () => {
    
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [SharedService],
    }).compileComponents();

    sharedService = TestBed.inject(SharedService);
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });


  it('should create an images array', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const mySspy = spyOn(sharedService, 'populateArray');
    expect(mySspy).toHaveBeenCalled();
  });

  it('should get a JSON string of the images array', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const mySspy = spyOn(sharedService, 'generateImgJson');
    expect(mySspy ).toHaveBeenCalled();
  });

});
