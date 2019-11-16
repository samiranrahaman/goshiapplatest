import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalPresenceEditComponent } from './global-presence-edit.component';

describe('GlobalPresenceEditComponent', () => {
  let component: GlobalPresenceEditComponent;
  let fixture: ComponentFixture<GlobalPresenceEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalPresenceEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalPresenceEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
