import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyEquipmentComponent } from './technology-equipment.component';

describe('TechnologyEquipmentComponent', () => {
  let component: TechnologyEquipmentComponent;
  let fixture: ComponentFixture<TechnologyEquipmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnologyEquipmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologyEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
