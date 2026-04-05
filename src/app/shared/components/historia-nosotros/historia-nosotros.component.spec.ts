import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriaNosotrosComponent } from './historia-nosotros.component';

describe('HistoriaNosotrosComponent', () => {
  let component: HistoriaNosotrosComponent;
  let fixture: ComponentFixture<HistoriaNosotrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoriaNosotrosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HistoriaNosotrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
