import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkouttxnComponent } from './workouttxn.component';

describe('WorkouttxnComponent', () => {
  let component: WorkouttxnComponent;
  let fixture: ComponentFixture<WorkouttxnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkouttxnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkouttxnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
