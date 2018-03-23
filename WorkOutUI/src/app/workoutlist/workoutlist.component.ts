import { Component, OnInit } from '@angular/core';
import { WorkoutListService } from '../workout-list.service';
import { Router } from '@angular/router';
import { AlertService } from '../alert.service';
import { DataServiceService } from '../data-service.service';
import { UserDataService } from '../user-data.service';
import {LoginService} from '../login.service';

@Component({
  selector: 'app-workoutlist',
  templateUrl: './workoutlist.component.html',
  styleUrls: ['./workoutlist.component.css'],
  providers:[
    WorkoutListService,
    LoginService
    ]
})
export class WorkoutlistComponent implements OnInit {

  workout: any = {};
  user: any={};
  loading = false;
  workoutList: any=[];

  constructor(
    private router: Router,
    private workoutListService: WorkoutListService,
    private alertService: AlertService,
    private dataService: DataServiceService,
    private userDataService: UserDataService
  ) { 
    this.workoutListService.getWorkoutList(parseInt(sessionStorage.getItem("userId")));
  }

  ngOnInit() {
	  
    this.workoutListService.getWorkoutList(parseInt(sessionStorage.getItem("userId")))
        .subscribe(
            data => {
               this.workoutList=data;
            },
            error => {
                this.alertService.error(error.error.message);
                this.loading = false;
            });
  }
  redirect() {
    this.router.navigate(['./workout']);
  }
  WorkoutTxnredirect(index: number) {
    this.dataService.calBurntPerUnitTime = this.workoutList[index][1];
    this.dataService.unitTime = this.workoutList[index][3 ];
   // this.dataService.workoutId = this.workoutList[index].workoutId;
    this.dataService.setWorkoutId (this.workoutList[index][0]);
    this.router.navigate(['./workoutTxn']);
  }
 
}
