import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScriptconfigComponent } from './scriptconfig.component';

describe('ScriptconfigComponent', () => {
  let component: ScriptconfigComponent;
  let fixture: ComponentFixture<ScriptconfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScriptconfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScriptconfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
