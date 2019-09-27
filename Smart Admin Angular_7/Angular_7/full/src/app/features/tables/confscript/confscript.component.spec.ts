import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfscriptComponent } from './confscript.component';

describe('ConfscriptComponent', () => {
  let component: ConfscriptComponent;
  let fixture: ComponentFixture<ConfscriptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfscriptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfscriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
