import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenetDirectiveComponent } from './componenet-directive.component';

describe('ComponenetDirectiveComponent', () => {
  let component: ComponenetDirectiveComponent;
  let fixture: ComponentFixture<ComponenetDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponenetDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenetDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
