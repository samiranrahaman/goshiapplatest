import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontHeaderJpComponent } from './front-header-jp.component';

describe('FrontHeaderJpComponent', () => {
  let component: FrontHeaderJpComponent;
  let fixture: ComponentFixture<FrontHeaderJpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontHeaderJpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontHeaderJpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
