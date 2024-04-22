import { Component } from '@angular/core';
import { VehiclesService } from '../services/vehicles.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent {

  constructor(private service:VehiclesService, private router:Router){}
  vehicles:any;
  selectedVehicle:any;
  booknow:any;
  showBuyNow=false;
  bookNow(v:any){
 
    this.router.navigate(['/user/booknow',v]);

  }
  ngOnInit(){
    this.service.getvehicles().subscribe((result)=>{
      this.vehicles=result;
      console.log(this.vehicles);
    })
  }


}
