import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorContentAddComponent } from './editor-content-add.component';

describe('EditorContentAddComponent', () => {
  let component: EditorContentAddComponent;
  let fixture: ComponentFixture<EditorContentAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorContentAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorContentAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
