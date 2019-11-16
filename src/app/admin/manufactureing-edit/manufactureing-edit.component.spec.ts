import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufactureingEditComponent } from './manufactureing-edit.component';

describe('ManufactureingEditComponent', () => {
  let component: ManufactureingEditComponent;
  let fixture: ComponentFixture<ManufactureingEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManufactureingEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManufactureingEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
