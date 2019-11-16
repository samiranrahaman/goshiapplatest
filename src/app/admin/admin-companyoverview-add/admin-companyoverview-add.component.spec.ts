import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCompanyoverviewAddComponent } from './admin-companyoverview-add.component';

describe('AdminCompanyoverviewAddComponent', () => {
  let component: AdminCompanyoverviewAddComponent;
  let fixture: ComponentFixture<AdminCompanyoverviewAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCompanyoverviewAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCompanyoverviewAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
