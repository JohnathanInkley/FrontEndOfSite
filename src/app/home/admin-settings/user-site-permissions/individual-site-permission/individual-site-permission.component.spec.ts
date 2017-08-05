import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualSitePermissionComponent } from './individual-site-permission.component';

describe('IndividualSitePermissionComponent', () => {
  let component: IndividualSitePermissionComponent;
  let fixture: ComponentFixture<IndividualSitePermissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndividualSitePermissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualSitePermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
