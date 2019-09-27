import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UsermanagComponent} from './usermanag.component';

describe('UsermanagComponent', () => {
    let component: UsermanagComponent;
    let fixture: ComponentFixture<UsermanagComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [UsermanagComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UsermanagComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
