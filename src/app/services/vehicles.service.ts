import { Injectable } from '@angular/core';
import { vehicle } from './vehicles';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  constructor() { }
  vehicleList:vehicle[]=[
    {
      vehicleId:1,
      vehicleName:'Bikes',
      vehicleCompany:'Royal Enfield Classic 350 Reborn',
      vehiclePriceperhour: '₹40/hr',
      vehicleImage:'https://ic1.maxabout.us/autos/tw_india/2/2021/9/2022-re-classic-350-dark-stealth-black-f3q.jpg',
    },
    {
      vehicleId:2,
      vehicleName:'Bikes',
      vehicleCompany:'Bajaj Avenger Cruise 220 (BS6)',
      vehiclePriceperhour: '₹31/hr',
      vehicleImage:'https://media.zigcdn.com/media/content/2020/Apr/avenger_street_220.jpg',
    },
    {
      vehicleId:3,
      vehicleName:'Bikes',
      vehicleCompany:'Yamaha MT 15',
      vehiclePriceperhour: '₹32/hr',
      vehicleImage:'https://motortrade.com.ph/wp-content/uploads/2019/03/mt15-ice-fluo.jpg',
    },
    {
      vehicleId:4,
      vehicleName:'Bikes',
      vehicleCompany:'Royal Enfield Himalayan',
      vehiclePriceperhour: '₹43/hr',
      vehicleImage:'https://ic1.maxabout.us/autos/tw_india/R/2021/2/royal-enfield-himalayan-mirage-silver.jpg',
    },
    {
      vehicleId:5,
      vehicleName:'Bikes',
      vehicleCompany:'Bajaj Pulsar NS200',
      vehiclePriceperhour: '₹45/hr',
      vehicleImage:'https://somosmoto.pe/images/models/gallery/bajaj-pulsar-pulsar-ns200-fi-abs-2018-gallery-9d5ce6.jpg',
    },
    {
      vehicleId:6,
      vehicleName:'Bikes',
      vehicleCompany:'TVS Ntorq 125',
      vehiclePriceperhour: '₹19/hr',
      vehicleImage:'http://www.autobics.com/wp-content/uploads/2018/02/TVS-NTORQ-125-Matte-Red-2018.jpg',
    },
    {
      vehicleId:7,
      vehicleName:'Bikes',
      vehicleCompany:'Aprilia SR 150 (ABS)',
      vehiclePriceperhour: '₹20/hr',
      vehicleImage:'https://cdn1.acedms.com/uploads/category/aprilia/20171120111918000000-5458228069963967489.png',
    },
    {
      vehicleId:8,
      vehicleName:'Bikes',
      vehicleCompany:'Honda Activa 125',
      vehiclePriceperhour: '₹16/hr',
      vehicleImage:'https://2.bp.blogspot.com/-HCkmz6-DY1g/VRvhUsuUyHI/AAAAAAAABEs/aIxoJCqKIrI/s1600/blue.JPG',
    },
    {
      vehicleId:9,
      vehicleName:'cars',
      vehicleCompany:'Renault Triber RXL 2022',
      vehiclePriceperhour: '₹120/hr',
      vehicleImage:'https://media.zigcdn.com/media/content/2020/Apr/avenger_street_220.jpghttp://www.todayjankari.com/uploads/media/6de2c15775b17ce84fac508e06f027f6.jpg',
    },
    {
      vehicleId:10,
      vehicleName:'cars',
      vehicleCompany:'Maruti Suzuki Swift Dzire 2022',
      vehiclePriceperhour: '₹150/hr',
      vehicleImage:'https://imgcdn.zigwheels.ph/large/gallery/color/29/257/suzuki-swift-dzire-color-825027.jpg',
    },
    {
      vehicleId:11,
      vehicleName:'cars',
      vehicleCompany:'Maruti Suzuki Celario Zxi 2014',
      vehiclePriceperhour: '₹80/hr',
      vehicleImage:'https://ic1.maxabout.us/autos/cars_india/N/2018/8/new-maruti-suzuki-celerio-x-india.jpg',
    },
    {
      vehicleId:12,
      vehicleName:'cars',
      vehicleCompany:'Hyundai I20 Sports 2017',
      vehiclePriceperhour: '₹90/hr',
      vehicleImage:'https://media.autoexpress.co.uk/image/private/s--eCpSzUdF--/v1579701098/autoexpress/7/16/photo-11_0.jpg',
    },
    {
      vehicleId:13,
      vehicleName:'cars',
      vehicleCompany:'Bajaj Avenger Cruise 220 (BS6)',
      vehiclePriceperhour: '₹31/hr',
      vehicleImage:'https://media.zigcdn.com/media/content/2020/Apr/avenger_street_220.jpg',
    },
    {
      vehicleId:14,
      vehicleName:'Bikes',
      vehicleCompany:'Bajaj Avenger Cruise 220 (BS6)',
      vehiclePriceperhour: '₹31/hr',
      vehicleImage:'https://media.zigcdn.com/media/content/2020/Apr/avenger_street_220.jpg',
    },
    {
      vehicleId:15,
      vehicleName:'cars',
      vehicleCompany:'Bajaj Avenger Cruise 220 (BS6)',
      vehiclePriceperhour: '₹31/hr',
      vehicleImage:'https://media.zigcdn.com/media/content/2020/Apr/avenger_street_220.jpg',
    },

    {
      vehicleId:16,
      vehicleName:'cars',
      vehicleCompany:'Bajaj Avenger Cruise 220 (BS6)',
      vehiclePriceperhour: '₹31/hr',
      vehicleImage:'https://media.zigcdn.com/media/content/2020/Apr/avenger_street_220.jpg',
    },
    {
      vehicleId:17,
      vehicleName:'Bikes',
      vehicleCompany:'Bajaj Avenger Cruise 220 (BS6)',
      vehiclePriceperhour: '₹31/hr',
      vehicleImage:'https://media.zigcdn.com/media/content/2020/Apr/avenger_street_220.jpg',
    },




















































  ]
}
