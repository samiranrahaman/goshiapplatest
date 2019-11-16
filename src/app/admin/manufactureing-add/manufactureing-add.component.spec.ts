import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufactureingAddComponent } from './manufactureing-add.component';

describe('ManufactureingAddComponent', () => {
  let component: ManufactureingAddComponent;
  let fixture: ComponentFixture<ManufactureingAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManufactureingAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManufactureingAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
