import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutTxnlistComponent } from './workout-txnlist.component';

describe('WorkoutTxnlistComponent', () => {
  let component: WorkoutTxnlistComponent;
  let fixture: ComponentFixture<WorkoutTxnlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkoutTxnlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutTxnlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
