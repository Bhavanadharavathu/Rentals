import { Component } from '@angular/core';
import { VehiclesService } from '../services/vehicles.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrl: './manage.component.css'
})
export class ManageComponent {
  constructor(private service:VehiclesService){}
  delete(v:any){
    this.service.deletevehicle(v);
    alert("vehicle deleted successfully");
  }
  vehicles:any;
  ngOnInit(){
    this.service.getvehicles().subscribe((result)=>{
      this.vehicles=result;
    });
  }
tosave(v:any){
  v.vehicleEdit=false;
  this.service.updatevehicle(v);
  alert("product updated successfully");
}
toupdate(v:any){
  v.vehicleEdit=true;
}
}


