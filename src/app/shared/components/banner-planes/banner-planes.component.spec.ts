import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerPlanesComponent } from './banner-planes.component';

describe('BannerPlanesComponent', () => {
  let component: BannerPlanesComponent;
  let fixture: ComponentFixture<BannerPlanesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerPlanesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BannerPlanesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
