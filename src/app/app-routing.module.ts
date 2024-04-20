import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { HomeComponent } from './home/home.component';
import { AutoComponent } from './auto/auto.component';
import { BikesComponent } from './bikes/bikes.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { CarComponent } from './car/car.component';
import { AddvehiclesComponent } from './addvehicles/addvehicles.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'user',component:UserdashboardComponent,
    children:[
      {path:'home',component:HomeComponent},
      {path:'auto',component:AutoComponent},
      {path:'bikes',component:BikesComponent},
      {path:'car',component:CarComponent}
    ]
  
  },
  {path:'admin',component:AdmindashboardComponent,
    children:[
      {path:'home',component:HomeComponent},
      {path:'auto',component:AutoComponent},
      {path:'bikes',component:BikesComponent},
      {path:'car',component:CarComponent},
      {path:'add',component:AddvehiclesComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
