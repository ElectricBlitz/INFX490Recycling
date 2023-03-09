import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { appRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { RewardsComponent } from './rewards';
import { QuizComponent } from './quiz';
import { MapComponent } from './map';
import { AdminComponent } from './admin';

@NgModule({
    imports: [
      BrowserModule,
      appRoutingModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        RewardsComponent,
        QuizComponent,
        MapComponent,
        AdminComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { };
