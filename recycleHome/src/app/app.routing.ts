import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { RewardsComponent } from './rewards';
import { QuizComponent } from './quiz';
import { MapComponent } from './map';
import { AdminComponent } from './admin';

const routes: Routes = [
    { path: '', component: HomeComponent }, // This should be the last route in your list
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'rewards', component: RewardsComponent},
    { path: 'quiz', component: QuizComponent},
    { path: 'map', component: MapComponent},
    {path: 'admin', component: AdminComponent},
    // adding {path: "**", component: Error404Component} will allow you to create a custom 404 page

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);