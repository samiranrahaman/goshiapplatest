import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyManufacturingComponent } from './technology-manufacturing.component';

describe('TechnologyManufacturingComponent', () => {
  let component: TechnologyManufacturingComponent;
  let fixture: ComponentFixture<TechnologyManufacturingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnologyManufacturingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologyManufacturingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
