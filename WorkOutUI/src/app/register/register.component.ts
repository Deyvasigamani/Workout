import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from '../alert.service';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[RegisterService]
})
export class RegisterComponent implements OnInit {

  user: any = {};
  loading = false;

  constructor(
    private router: Router,
    private registerService: RegisterService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
  }

  register() {
    this.loading = true;
    this.registerService.register(this.user)
        .subscribe(
            data => {
                this.alertService.success('Registration successful', true);
                this.router.navigate(['/login']);
            },
            error => {
                this.alertService.error(error.error.message);
                this.loading = false;
            });
  }
}
