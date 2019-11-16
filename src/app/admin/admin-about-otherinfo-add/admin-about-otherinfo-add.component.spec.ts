import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAboutOtherinfoAddComponent } from './admin-about-otherinfo-add.component';

describe('AdminAboutOtherinfoAddComponent', () => {
  let component: AdminAboutOtherinfoAddComponent;
  let fixture: ComponentFixture<AdminAboutOtherinfoAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAboutOtherinfoAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAboutOtherinfoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
