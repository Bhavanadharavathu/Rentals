import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { HomeComponent } from './home/home.component';
import { BikesComponent } from './bikes/bikes.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { CarComponent } from './car/car.component';
import { AddvehiclesComponent } from './addvehicles/addvehicles.component';
import { AboutComponent } from './about/about.component';
import { BookNowComponent } from './book-now/book-now.component';
import { ManageComponent } from './manage/manage.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'user',component:UserdashboardComponent,
    children:[
      {path:'home',component:HomeComponent},
      {path:'bike',component:BikesComponent},
      {path:'car',component:CarComponent},
      {path:'about',component:AboutComponent},
      {path:'booknow/:id',component:BookNowComponent}
    ]
  
  },
  {path:'admin',component:AdmindashboardComponent,
    children:[
      {path:'home',component:HomeComponent},
      {path:'bike',component:BikesComponent},
      {path:'car',component:CarComponent},
      {path:'add',component:AddvehiclesComponent},
      {path:'about',component:AboutComponent},
      {path:'booknow',component:BookNowComponent},
      {path:'manage',component:ManageComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
