import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiNotificationBarComponent } from './ui-notification-bar.component';

describe('UiNotificationBarComponent', () => {
  let component: UiNotificationBarComponent;
  let fixture: ComponentFixture<UiNotificationBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiNotificationBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiNotificationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
