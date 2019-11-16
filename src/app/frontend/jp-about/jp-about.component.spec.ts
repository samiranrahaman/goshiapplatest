import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JpAboutComponent } from './jp-about.component';

describe('JpAboutComponent', () => {
  let component: JpAboutComponent;
  let fixture: ComponentFixture<JpAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JpAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JpAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
