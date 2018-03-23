import { Component, OnInit } from '@angular/core';
import { WorkouttxnService } from '../workouttxn.service';
import { Router } from '@angular/router';
import { AlertService } from '../alert.service';
import { User } from '../structure/user';
import { DataServiceService } from '../data-service.service';
import {WorkoutListService} from '../workout-list.service';

@Component({
  selector: 'app-workouttxn',
  templateUrl: './workouttxn.component.html',
  styleUrls: ['./workouttxn.component.css'],
  providers:[
    WorkouttxnService,
    WorkoutListService
  ]
})
export class WorkouttxnComponent implements OnInit {

 
  workoutTxn: any = {};
  loading = false;
  workoutTxnList: any=[];
  datemod : string;
  constructor(
    private router: Router,
    private WorkouttxnService: WorkouttxnService,
    private alertService: AlertService,
    private dataService: DataServiceService
  ) { 
    
  }

  ngOnInit() {
  }
  createWorkoutTxn() {
    this.loading = true;
    this.workoutTxn.workout=this.dataService;
    var startDate = new Date(this.workoutTxn.startTime).toISOString();
    this.workoutTxn.startTime=startDate.replace('Z','');
    var endDate = new Date(this.workoutTxn.stopTime).toISOString();
    this.workoutTxn.stopTime=endDate.replace('Z','');
    this.WorkouttxnService.createWorkoutTxn(this.workoutTxn)
        .subscribe(
            data => {
                this.alertService.success('Transaction Successfully Added', true);
                this.router.navigate(['/workoutTxn']);
            },
            error => {
                this.alertService.error(error.error.message);
                this.loading = false;
            });
  }
  redirect() {
    this.router.navigate(['./workoutTxn']);
  }
}
