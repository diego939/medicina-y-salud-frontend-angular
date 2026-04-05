import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionPlanesHomeComponent } from './section-planes-home.component';

describe('SectionPlanesHomeComponent', () => {
  let component: SectionPlanesHomeComponent;
  let fixture: ComponentFixture<SectionPlanesHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionPlanesHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectionPlanesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
