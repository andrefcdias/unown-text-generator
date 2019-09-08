import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnownLetterComponent } from './unown-letter.component';

describe('UnownLetterComponent', () => {
  let component: UnownLetterComponent;
  let fixture: ComponentFixture<UnownLetterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnownLetterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnownLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
