import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionAtentionComponent } from './section-atention.component';

describe('SectionAtentionComponent', () => {
  let component: SectionAtentionComponent;
  let fixture: ComponentFixture<SectionAtentionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionAtentionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectionAtentionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
