import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsNosotrosComponent } from './cards-nosotros.component';

describe('CardsNosotrosComponent', () => {
  let component: CardsNosotrosComponent;
  let fixture: ComponentFixture<CardsNosotrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsNosotrosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardsNosotrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
