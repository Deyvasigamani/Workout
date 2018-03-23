import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {LoginComponent} from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {WorkoutlistComponent} from './workoutlist/workoutlist.component';
import {WorkoutComponent} from './workout/workout.component';
import {WorkoutTxnlistComponent} from './workout-txnlist/workout-txnlist.component';
import {WorkouttxnComponent} from './workouttxn/workouttxn.component';

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent},
    { path: 'workoutList', component: WorkoutlistComponent},
    { path: 'workout', component: WorkoutComponent},
    { path: 'workoutTxn', component: WorkoutTxnlistComponent},
    { path: 'workoutTxnAdd', component: WorkouttxnComponent}
];


@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
  })
export class AppRoute{}