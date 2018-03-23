import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../login.service';
import { AlertService } from '../alert.service';
import { DataServiceService } from '../data-service.service';
import { UserDataService } from '../user-data.service';
import { Input } from '@angular/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[LoginService]
})
export class LoginComponent implements OnInit {

  model: any = {};
  loading = false;
   constructor(
    private route: ActivatedRoute,
    private router: Router,
    private loginService: LoginService,
    private alertService: AlertService,
    private dataService: DataServiceService,
    private userDataService: UserDataService
   ) { }

   ngOnInit() {
   }
  login() {
    this.loading = true;
    this.loginService.login(this.model.username, this.model.password)
        .subscribe(
            data => {
               this.userDataService.userId =data.UserId;
			   sessionStorage.setItem("userId", data.UserId);
               this.router.navigate(['workoutList']);
            },
            error => {
                this.alertService.error(error.error.message);
                this.loading = false;
            });
  }

}
