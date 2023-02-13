import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnAngularComponent } from './learnAngular.component';

describe('LearnAngularComponent', () => {
  let component: LearnAngularComponent;
  let fixture: ComponentFixture<LearnAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearnAngularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearnAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
