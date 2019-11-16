import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCompanyhistoryEditComponent } from './admin-companyhistory-edit.component';

describe('AdminCompanyhistoryEditComponent', () => {
  let component: AdminCompanyhistoryEditComponent;
  let fixture: ComponentFixture<AdminCompanyhistoryEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCompanyhistoryEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCompanyhistoryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
