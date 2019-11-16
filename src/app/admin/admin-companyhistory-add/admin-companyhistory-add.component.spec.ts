import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCompanyhistoryAddComponent } from './admin-companyhistory-add.component';

describe('AdminCompanyhistoryAddComponent', () => {
  let component: AdminCompanyhistoryAddComponent;
  let fixture: ComponentFixture<AdminCompanyhistoryAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCompanyhistoryAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCompanyhistoryAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
