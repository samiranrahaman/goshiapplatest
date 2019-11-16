import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCompanyoverviewEditComponent } from './admin-companyoverview-edit.component';

describe('AdminCompanyoverviewEditComponent', () => {
  let component: AdminCompanyoverviewEditComponent;
  let fixture: ComponentFixture<AdminCompanyoverviewEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCompanyoverviewEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCompanyoverviewEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
