import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JpTechnologyComponent } from './jp-technology.component';

describe('JpTechnologyComponent', () => {
  let component: JpTechnologyComponent;
  let fixture: ComponentFixture<JpTechnologyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JpTechnologyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JpTechnologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
