import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionCardsHomeComponent } from './section-cards-home.component';

describe('SectionCardsHomeComponent', () => {
  let component: SectionCardsHomeComponent;
  let fixture: ComponentFixture<SectionCardsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionCardsHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectionCardsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
