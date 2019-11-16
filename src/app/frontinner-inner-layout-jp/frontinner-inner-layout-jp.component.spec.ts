import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontinnerInnerLayoutJpComponent } from './frontinner-inner-layout-jp.component';

describe('FrontinnerInnerLayoutJpComponent', () => {
  let component: FrontinnerInnerLayoutJpComponent;
  let fixture: ComponentFixture<FrontinnerInnerLayoutJpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontinnerInnerLayoutJpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontinnerInnerLayoutJpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
