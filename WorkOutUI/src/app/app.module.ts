import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {AppRoute} from './/app.routing.module';
import { AlertService } from './alert.service';
import { BaseurlService } from './baseurl.service';
import { DataServiceService } from './data-service.service';
import { UserDataService } from './user-data.service';
import {RegisterService} from './register.service';
import { WorkoutComponent } from './workout/workout.component';
import { WorkoutlistComponent } from './workoutlist/workoutlist.component';
import {WorkoutListService} from './workout-list.service'
import {WorkoutService} from './workout.service';
import { WorkoutTxnlistComponent } from './workout-txnlist/workout-txnlist.component';
import {WorkouttxnlistService} from './workouttxnlist.service';
import { WorkouttxnComponent } from './workouttxn/workouttxn.component';
import {WorkouttxnService} from './workouttxn.service';
import { DlDateTimePickerDateModule } from 'angular-bootstrap-datetimepicker';
import { AlertComponent } from './alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    WorkoutComponent,
    WorkoutlistComponent,
    WorkoutTxnlistComponent,
    WorkouttxnComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoute,
    HttpClientModule,
    FormsModule,
    DlDateTimePickerDateModule
  ],
  providers: [ 
    AlertService,
    BaseurlService,
    DataServiceService,
    UserDataService,
    RegisterService,
    WorkoutListService,
    WorkoutService,
    WorkouttxnlistService,
    WorkouttxnService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
