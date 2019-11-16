import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JpProductComponent } from './jp-product.component';

describe('JpProductComponent', () => {
  let component: JpProductComponent;
  let fixture: ComponentFixture<JpProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JpProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JpProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
