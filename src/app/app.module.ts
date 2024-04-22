import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CarComponent } from './car/car.component';
import { BikesComponent } from './bikes/bikes.component';
import { AddvehiclesComponent } from './addvehicles/addvehicles.component';
import { FormsModule } from '@angular/forms';
import { ManageComponent } from './manage/manage.component';
import { AboutComponent } from './about/about.component';
import { BookNowComponent } from './book-now/book-now.component';

@NgModule({
  declarations: [
    AppComponent,
    UserdashboardComponent,
    AdmindashboardComponent,
    LoginComponent,
    HomeComponent,
    CarComponent,
    BikesComponent,
    AddvehiclesComponent,
    ManageComponent,
    AboutComponent,
    BookNowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
