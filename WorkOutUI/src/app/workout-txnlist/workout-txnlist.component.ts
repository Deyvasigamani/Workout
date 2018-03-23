import { Component, OnInit } from '@angular/core';
import { WorkouttxnlistService } from '../workouttxnlist.service';
import { Router } from '@angular/router';
import { AlertService } from '../alert.service';
import { Input } from '@angular/core';
import { User } from '../structure/user';
import { DataServiceService } from '../data-service.service';
import {WorkoutListService} from '../workout-list.service';

@Component({
  selector: 'app-workout-txnlist',
  templateUrl: './workout-txnlist.component.html',
  styleUrls: ['./workout-txnlist.component.css'],
  providers:[
    WorkouttxnlistService,
    WorkoutListService
    ]
})
export class WorkoutTxnlistComponent implements OnInit {

  user:any={};
  workout: any = {};
  loading = false;
  workoutTxnList: any=[];
  constructor(
    private router: Router,
    private workoutTxnService: WorkouttxnlistService,
    private alertService: AlertService,
    private dataService: DataServiceService
  ) { 
    this.workoutTxnService.getWorkoutTxnList(this.user);
  }

  ngOnInit() {
    this.workout=this.dataService;
    console.log("workoutTxnService workout: "+this.workout.workoutId+" **data: "+this.dataService.getWorkoutId());
    this.workoutTxnService.getWorkoutTxnList(this.dataService.workoutId)
        .subscribe(
            data => {
               
               this.workoutTxnList=data;
               console.log("Response: "+this.workoutTxnList);
            },
            error => {
                this.alertService.error(error.error.message);
                this.loading = false;
            });
  }
  redirect() {
    this.router.navigate(['./workoutTxnAdd']);
  }
  backRedirect() {
    this.router.navigate(['./workoutList']);
  }
}
