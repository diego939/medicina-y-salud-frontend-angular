import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsPlanesComponent } from './cards-planes.component';

describe('CardsPlanesComponent', () => {
  let component: CardsPlanesComponent;
  let fixture: ComponentFixture<CardsPlanesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsPlanesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardsPlanesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
