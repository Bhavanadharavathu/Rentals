import { Injectable } from '@angular/core';
import { vehicle } from './vehicles';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {
    toupdate(v: any) {
      throw new Error('Method not implemented.');
    }
  
  
    constructor() { }
    vehicleList:vehicle[]=[
      {
        vehicleId:1,
        vehicleName:'Bikes',
        vehicleCompany:'Royal Enfield Classic',
        vehiclePriceperhour: '₹40/hr',
        vehicleImage:'https://imotorbike.my/news/wp-content/uploads/2023/02/2022-royal-enfield-classic-350-first-look-retro-motorcycle-india-7.jpg',
        vehicleEdit:false
      },
      {
        vehicleId:2,
        vehicleName:'Bikes',
        vehicleCompany:'Bajaj Avenger Cruise(BS6)',
        vehiclePriceperhour: '₹31/hr',
        vehicleImage:'https://img.indianautosblog.com/resize/750x-/2020/04/03/bajaj-avenger-220-cruise-bs6-left-side-9724.png',
        vehicleEdit:false
      },
      {
        vehicleId:3,
        vehicleName:'Bikes',
        vehicleCompany:'Yamaha MT 15',
        vehiclePriceperhour: '₹32/hr',
        vehicleImage:'https://www.sepedamotor.com/wp-content/uploads/2019/04/mt-15-metallic-black-min.jpg',
        vehicleEdit:false
      },
      {
        vehicleId:4,
        vehicleName:'Bikes',
        vehicleCompany:'Royal Enfield Himalayan',
        vehiclePriceperhour: '₹43/hr',
        vehicleImage:'https://ic1.maxabout.us/autos/tw_india/R/2021/2/royal-enfield-himalayan-mirage-silver.jpg',
        vehicleEdit:false
      },
      {
        vehicleId:5,
        vehicleName:'Bikes',
        vehicleCompany:'Bajaj Pulsar NS200',
        vehiclePriceperhour: '₹45/hr',
        vehicleImage:'https://somosmoto.pe/images/models/gallery/bajaj-pulsar-pulsar-ns200-fi-abs-2018-gallery-9d5ce6.jpg',
        vehicleEdit:false
      },
      {
        vehicleId:6,
        vehicleName:'Bikes',
        vehicleCompany:'TVS Ntorq 125',
        vehiclePriceperhour: '₹19/hr',
        vehicleImage:'http://www.autobics.com/wp-content/uploads/2018/02/TVS-NTORQ-125-Matte-Red-2018.jpg',
        vehicleEdit:false
      },
      {
        vehicleId:7,
        vehicleName:'Bikes',
        vehicleCompany:'Aprilia SR 150',
        vehiclePriceperhour: '₹20/hr',
        vehicleImage:'https://cdn1.acedms.com/uploads/category/aprilia/20171120111918000000-5458228069963967489.png',
        vehicleEdit:false
      },
      {
        vehicleId:8,
        vehicleName:'Bikes',
        vehicleCompany:'Honda Activa 125',
        vehiclePriceperhour: '₹16/hr',
        vehicleImage:'https://1.bp.blogspot.com/-5HxAPvQXO2c/XqByUKiNvhI/AAAAAAAAA5o/DxqeBb7s1eQcK5ZZEfHHQiu0Fx8wYVwgwCLcBGAsYHQ/s1600/Capture3.JPG',
        vehicleEdit:false
      },
      {
        vehicleId:9,
        vehicleName:'cars',
        vehicleCompany:'Renault Triber RXL',
        vehiclePriceperhour: '₹120/hr',
        vehicleImage:'https://imgd-ct.aeplcdn.com/1056x660/n/yshbs0b_1641669.jpg?q=75',
        vehicleEdit:false
      },
      {
        vehicleId:10,
        vehicleName:'cars',
        vehicleCompany:'Suzuki SwiftDzire',
        vehiclePriceperhour: '₹150/hr',
        vehicleImage:'http://img.qatarliving.com/styles/horizontal_large/s3/2018/05/06/Dzre-3_0.jpg?itok=LPLK2om8',
        vehicleEdit:false
      },
      {
        vehicleId:11,
        vehicleName:'cars',
        vehicleCompany:'Suzuki CelarioZxi',
        vehiclePriceperhour: '₹80/hr',
        vehicleImage:'https://i.ytimg.com/vi/4W4givbn7z0/maxresdefault.jpg',
        vehicleEdit:false
      },
      {
        vehicleId:12,
        vehicleName:'cars',
        vehicleCompany:'Hyundai I20 Sports',
        vehiclePriceperhour: '₹90/hr',
        vehicleImage:'https://cdn.motor1.com/images/mgl/pEeOJ/s1/hyundai-i20-n-2021.jpg',
        vehicleEdit:false
      },
      {
        vehicleId:13,
        vehicleName:'cars',
        vehicleCompany:'Hyundai I20 Elite',
        vehiclePriceperhour: '₹80/hr',
        vehicleImage:'https://img2.gaadicdn.com/images/carNewsEditorImages/930x620/20171127_151956/21010/hyundai0.jpg',
        vehicleEdit:false
      },
      {
        vehicleId:14,
        vehicleName:'cars',
        vehicleCompany:'Kia EV6',
        vehiclePriceperhour: '₹120/hr',
        vehicleImage:'https://autotalk.com.au/wp-content/uploads/2021/03/Kia-EV6-heading-for-New-Zealand-small.jpg',
        vehicleEdit:false
      },
      {
        vehicleId:15,
        vehicleName:'cars',
        vehicleCompany:'Toyota Corolla',
        vehiclePriceperhour: '₹140/hr',
        vehicleImage:'https://file.kelleybluebookimages.com/kbb/base/evox/CP/11595/2017-Toyota-Corolla-front_11595_032_2400x1800_040.png',
        vehicleEdit:false
      },
  
      {
        vehicleId:16,
        vehicleName:'cars',
        vehicleCompany:' Suzuki Baleno',
        vehiclePriceperhour: '₹90/hr',
        vehicleImage:'https://stokveltalk.co.za/wp-content/uploads/2022/07/baleno-fl-1.jpg',
        vehicleEdit:false
      },
    ]
    getvehicles(){
      return  of (this.vehicleList);
    }
    addvehicle(vehicle:vehicle){
      this.vehicleList.push(vehicle);
      console.log(vehicle);
    }
    deletevehicle(veh:vehicle){
      let res=this.vehicleList.findIndex((v=>{v.vehicleId==veh.vehicleId}));
      this.vehicleList.splice(res,1)
    }
  
    updatevehicle(veh:vehicle){
      let res=this.vehicleList.findIndex((v=>{v.vehicleId==veh.vehicleId}));
      this.vehicleList.splice(res,1,veh)
    }
    getVehicleById(vId:any):any{
      for(let v of this.vehicleList){
        if(v.vehicleId==vId){
          return v;
        }
      }

    }
  }

