import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnTailwindComponent } from './learn-tailwind.component';

describe('LearnTailwindComponent', () => {
  let component: LearnTailwindComponent;
  let fixture: ComponentFixture<LearnTailwindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearnTailwindComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearnTailwindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
