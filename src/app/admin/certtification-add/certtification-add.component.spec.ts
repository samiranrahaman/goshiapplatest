import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CerttificationAddComponent } from './certtification-add.component';

describe('CerttificationAddComponent', () => {
  let component: CerttificationAddComponent;
  let fixture: ComponentFixture<CerttificationAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CerttificationAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CerttificationAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
