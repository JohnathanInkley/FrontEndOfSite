import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSitePermissionsComponent } from './user-site-permissions.component';

describe('UserSitePermissionsComponent', () => {
  let component: UserSitePermissionsComponent;
  let fixture: ComponentFixture<UserSitePermissionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSitePermissionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSitePermissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
