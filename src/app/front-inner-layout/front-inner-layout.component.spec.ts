import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontInnerLayoutComponent } from './front-inner-layout.component';

describe('FrontInnerLayoutComponent', () => {
  let component: FrontInnerLayoutComponent;
  let fixture: ComponentFixture<FrontInnerLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontInnerLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontInnerLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
