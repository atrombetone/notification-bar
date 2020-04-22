import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarUseComponent } from './bar-use.component';

describe('BarUseComponent', () => {
  let component: BarUseComponent;
  let fixture: ComponentFixture<BarUseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarUseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarUseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
