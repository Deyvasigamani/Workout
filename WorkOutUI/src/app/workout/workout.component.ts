import { Component, OnInit } from '@angular/core';
import { WorkoutService } from '../workout.service';
import { Router } from '@angular/router';
import { AlertService } from '../alert.service';
import { DataServiceService } from '../data-service.service';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css'],
  providers:[WorkoutService]
})
export class WorkoutComponent implements OnInit {

  workout: any = {};
  user: any = {};
  loading = false;

  constructor(
    private router: Router,
    private workoutService: WorkoutService,
    private alertService: AlertService,
    private dataService: DataServiceService,
    private userDataService: UserDataService,
   
  ) { }

  ngOnInit() {
  }

defineWorkout() {
    this.loading = true;  
	
	if(this.userDataService.userId==undefined){
		this.userDataService.userId=parseInt(sessionStorage.getItem("userId"));
	}
    this.workout.user=this.userDataService;
    this.dataService.calBurntPerUnitTime=this.workout.calBurntPerUnitTime;
    this.dataService.unitTime=this.workout.unitTime;
    this.workoutService.defineWorkout(this.workout)
        .subscribe(
            data => {
                this.alertService.success('Workout Created successfully', true);
                this.router.navigate(['workoutList']);
            },
            error => {
                this.alertService.error(error.error.message);
                this.router.navigate(['workoutList']);
                this.loading = false;
            });
  }
  redirect() {
    this.router.navigate(['./workoutList']);
  }

}