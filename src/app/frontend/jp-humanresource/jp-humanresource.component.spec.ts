import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JpHumanresourceComponent } from './jp-humanresource.component';

describe('JpHumanresourceComponent', () => {
  let component: JpHumanresourceComponent;
  let fixture: ComponentFixture<JpHumanresourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JpHumanresourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JpHumanresourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
