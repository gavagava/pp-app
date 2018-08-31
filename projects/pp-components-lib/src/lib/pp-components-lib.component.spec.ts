import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PpComponentsLibComponent } from './pp-components-lib.component';

describe('PpComponentsLibComponent', () => {
  let component: PpComponentsLibComponent;
  let fixture: ComponentFixture<PpComponentsLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PpComponentsLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PpComponentsLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
