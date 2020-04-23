import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiToolBarComponent } from './ui-tool-bar.component';

describe('UiToolBarComponent', () => {
  let component: UiToolBarComponent;
  let fixture: ComponentFixture<UiToolBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiToolBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiToolBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
