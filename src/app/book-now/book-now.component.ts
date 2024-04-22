import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { VehiclesService } from '../services/vehicles.service';


@Component({
  selector: 'app-book-now',
  templateUrl: './book-now.component.html',
  styleUrl: './book-now.component.css'
})
export class BookNowComponent {
  booknow:any;
  constructor(private route: ActivatedRoute,private service:VehiclesService,private router:Router) { }
  vehicle:any;
  pickupLocation: any;
  dropOffLocation: any;
  pickupDateTime: any;

  submitBookingForm() {
    console.log('Form submitted');
    console.log('Pickup Location:', this.pickupLocation);
    console.log('Drop-off Location:', this.dropOffLocation);
    console.log('Pickup Date and Time:', this.pickupDateTime);
  }
  ngOnInit(): void {
    const vehicleId = this.route.snapshot.params['id'];
    this.vehicle=this.service.getVehicleById(vehicleId)||null;
    this.pickupLocation = '';
    this.dropOffLocation = '';
    this.pickupDateTime = '';
  }
  onSubmit(){
    Swal.fire({
      title:"Booking Success",
      text:"Thank you for Booking",
      icon:"success"
    });
    this.router.navigateByUrl("/admin/car");
}

}
