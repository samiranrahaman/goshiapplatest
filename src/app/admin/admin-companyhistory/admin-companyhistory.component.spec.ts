import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCompanyhistoryComponent } from './admin-companyhistory.component';

describe('AdminCompanyhistoryComponent', () => {
  let component: AdminCompanyhistoryComponent;
  let fixture: ComponentFixture<AdminCompanyhistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCompanyhistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCompanyhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
