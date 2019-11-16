import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontinnerHeaderJpComponent } from './frontinner-header-jp.component';

describe('FrontinnerHeaderJpComponent', () => {
  let component: FrontinnerHeaderJpComponent;
  let fixture: ComponentFixture<FrontinnerHeaderJpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontinnerHeaderJpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontinnerHeaderJpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
