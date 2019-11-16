import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontProductComponent } from './front-product.component';

describe('FrontProductComponent', () => {
  let component: FrontProductComponent;
  let fixture: ComponentFixture<FrontProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
