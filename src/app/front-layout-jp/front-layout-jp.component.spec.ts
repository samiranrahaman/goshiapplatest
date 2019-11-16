import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontLayoutJpComponent } from './front-layout-jp.component';

describe('FrontLayoutJpComponent', () => {
  let component: FrontLayoutJpComponent;
  let fixture: ComponentFixture<FrontLayoutJpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontLayoutJpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontLayoutJpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
