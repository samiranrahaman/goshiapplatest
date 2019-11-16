import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontinnerHeaderComponent } from './frontinner-header.component';

describe('FrontinnerHeaderComponent', () => {
  let component: FrontinnerHeaderComponent;
  let fixture: ComponentFixture<FrontinnerHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontinnerHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontinnerHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
