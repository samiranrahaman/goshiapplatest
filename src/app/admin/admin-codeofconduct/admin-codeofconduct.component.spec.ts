import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCodeofconductComponent } from './admin-codeofconduct.component';

describe('AdminCodeofconductComponent', () => {
  let component: AdminCodeofconductComponent;
  let fixture: ComponentFixture<AdminCodeofconductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCodeofconductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCodeofconductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
