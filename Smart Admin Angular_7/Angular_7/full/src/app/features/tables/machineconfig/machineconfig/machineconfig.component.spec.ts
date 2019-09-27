import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineconfigComponent } from './machineconfig.component';
import {NgxDatatableModule} from "@swimlane/ngx-datatable";

describe('MachineconfigComponent', () => {
  let component: MachineconfigComponent;
  let fixture: ComponentFixture<MachineconfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachineconfigComponent ],
      imports: [NgxDatatableModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineconfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
