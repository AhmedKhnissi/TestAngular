import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AhmedKhnissiShowShowrroomComponent } from './ahmed-khnissi-show-showrroom.component';

describe('AhmedKhnissiShowShowrroomComponent', () => {
  let component: AhmedKhnissiShowShowrroomComponent;
  let fixture: ComponentFixture<AhmedKhnissiShowShowrroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AhmedKhnissiShowShowrroomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AhmedKhnissiShowShowrroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
