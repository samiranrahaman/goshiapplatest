import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCompanyoverviewComponent } from './admin-companyoverview.component';

describe('AdminCompanyoverviewComponent', () => {
  let component: AdminCompanyoverviewComponent;
  let fixture: ComponentFixture<AdminCompanyoverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCompanyoverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCompanyoverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
