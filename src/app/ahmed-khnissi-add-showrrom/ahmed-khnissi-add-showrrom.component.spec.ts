import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AhmedKhnissiAddShowrromComponent } from './ahmed-khnissi-add-showrrom.component';

describe('AhmedKhnissiAddShowrromComponent', () => {
  let component: AhmedKhnissiAddShowrromComponent;
  let fixture: ComponentFixture<AhmedKhnissiAddShowrromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AhmedKhnissiAddShowrromComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AhmedKhnissiAddShowrromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
