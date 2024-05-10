import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AhmedKhnissiComponent } from './ahmed-khnissi.component';

describe('AhmedKhnissiComponent', () => {
  let component: AhmedKhnissiComponent;
  let fixture: ComponentFixture<AhmedKhnissiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AhmedKhnissiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AhmedKhnissiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
