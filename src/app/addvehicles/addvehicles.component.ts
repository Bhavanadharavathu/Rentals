import { Component } from '@angular/core';
import { VehiclesService } from '../services/vehicles.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addvehicles',
  templateUrl: './addvehicles.component.html',
  styleUrl: './addvehicles.component.css'
})
export class AddvehiclesComponent {

  vehicleId:any;
  vehicleName:any;
  vehicleCompany:any;
  vehiclePriceperhour:any;
  vehicleImage:any;
  newvehicle:any;

  constructor(private service:VehiclesService,private router:Router){}
  addvehicle(){
    this.newvehicle={
      vehicleId:this.vehicleId,
  vehicleName:this.vehicleName,
  vehicleCompany:this.vehicleCompany,
  vehiclePriceperhour:this.vehiclePriceperhour,
  vehicleImage:this.vehicleImage
    }
    this.service.addvehicle(this.newvehicle);
    Swal.fire({
      title:"success",
      text:"vehicle is added",
      icon:"success"
    });
    this.router.navigateByUrl("/admin/manage");
  }

}
