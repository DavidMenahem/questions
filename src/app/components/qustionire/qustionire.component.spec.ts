import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QustionireComponent } from './qustionire.component';

describe('QustionireComponent', () => {
  let component: QustionireComponent;
  let fixture: ComponentFixture<QustionireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QustionireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QustionireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
