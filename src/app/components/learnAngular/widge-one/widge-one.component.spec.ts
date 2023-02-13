import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgeOneComponent } from './widge-one.component';

describe('WidgeOneComponent', () => {
  let component: WidgeOneComponent;
  let fixture: ComponentFixture<WidgeOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgeOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgeOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
