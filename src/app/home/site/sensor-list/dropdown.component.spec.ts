import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownComponenent } from './sensor-list.component';

describe('DropdownComponenent', () => {
  let component: DropdownComponenent;
  let fixture: ComponentFixture<DropdownComponenent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownComponenent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownComponenent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
