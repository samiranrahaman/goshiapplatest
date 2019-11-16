import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalPresenceAddComponent } from './global-presence-add.component';

describe('GlobalPresenceAddComponent', () => {
  let component: GlobalPresenceAddComponent;
  let fixture: ComponentFixture<GlobalPresenceAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalPresenceAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalPresenceAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
