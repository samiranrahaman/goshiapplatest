import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CerttificationComponent } from './certtification.component';

describe('CerttificationComponent', () => {
  let component: CerttificationComponent;
  let fixture: ComponentFixture<CerttificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CerttificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CerttificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
