import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAboutusEditComponent } from './admin-aboutus-edit.component';

describe('AdminAboutusEditComponent', () => {
  let component: AdminAboutusEditComponent;
  let fixture: ComponentFixture<AdminAboutusEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAboutusEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAboutusEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
