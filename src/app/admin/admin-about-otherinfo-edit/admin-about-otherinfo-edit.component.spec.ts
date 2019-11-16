import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAboutOtherinfoEditComponent } from './admin-about-otherinfo-edit.component';

describe('AdminAboutOtherinfoEditComponent', () => {
  let component: AdminAboutOtherinfoEditComponent;
  let fixture: ComponentFixture<AdminAboutOtherinfoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAboutOtherinfoEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAboutOtherinfoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
