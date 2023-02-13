import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgeTwoComponent } from './widge-two.component';

describe('WidgeTwoComponent', () => {
  let component: WidgeTwoComponent;
  let fixture: ComponentFixture<WidgeTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgeTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgeTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
