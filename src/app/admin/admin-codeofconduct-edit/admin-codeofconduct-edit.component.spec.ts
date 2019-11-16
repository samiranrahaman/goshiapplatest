import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCodeofconductEditComponent } from './admin-codeofconduct-edit.component';

describe('AdminCodeofconductEditComponent', () => {
  let component: AdminCodeofconductEditComponent;
  let fixture: ComponentFixture<AdminCodeofconductEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCodeofconductEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCodeofconductEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
