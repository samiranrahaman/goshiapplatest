import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAboutOtherinfoComponent } from './admin-about-otherinfo.component';

describe('AdminAboutOtherinfoComponent', () => {
  let component: AdminAboutOtherinfoComponent;
  let fixture: ComponentFixture<AdminAboutOtherinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAboutOtherinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAboutOtherinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
