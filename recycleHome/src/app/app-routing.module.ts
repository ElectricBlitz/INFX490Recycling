import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RewardsComponent } from './rewards/rewards.component';
import { QuizComponent } from './quiz/quiz.component';
import { MapComponent } from './map/map.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "login", component:LoginComponent},
  {path: "register", component:RegisterComponent},
  {path: "rewards", component:RewardsComponent},
  {path: "quiz", component:QuizComponent},
  {path: "map", component:MapComponent},
  {path: "admin", component:AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
