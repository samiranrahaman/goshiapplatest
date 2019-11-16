import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JpContactComponent } from './jp-contact.component';

describe('JpContactComponent', () => {
  let component: JpContactComponent;
  let fixture: ComponentFixture<JpContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JpContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JpContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
