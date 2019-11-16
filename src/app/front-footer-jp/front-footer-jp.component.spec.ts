import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontFooterJpComponent } from './front-footer-jp.component';

describe('FrontFooterJpComponent', () => {
  let component: FrontFooterJpComponent;
  let fixture: ComponentFixture<FrontFooterJpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontFooterJpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontFooterJpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
