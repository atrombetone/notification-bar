import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarSimpleTextComponent } from './bar-simple-text.component';

describe('BarSimpleTextComponent', () => {
  let component: BarSimpleTextComponent;
  let fixture: ComponentFixture<BarSimpleTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarSimpleTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarSimpleTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
