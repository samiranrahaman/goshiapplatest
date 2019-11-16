import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JpDashboardComponent } from './jp-dashboard.component';

describe('JpDashboardComponent', () => {
  let component: JpDashboardComponent;
  let fixture: ComponentFixture<JpDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JpDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JpDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
