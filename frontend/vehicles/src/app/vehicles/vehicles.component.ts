import { Component, OnInit, Input } from '@angular/core';
import { Vehicle } from '../vehicle';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css'],
})
export class VehiclesComponent implements OnInit {

  @Input('idVehicleType') idVehicleType: String = this.activatedRoute.snapshot.params['idVehicleType'];

  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.idVehicleType);
    this.getVehicles();
  }

  listVehicles: Vehicle[] = new Array();

  getVehicles() {
    
    let url = 'https://localhost:8443/vehicles/getAllVehicles';
    
    this.apiService.restItemsServiceGetRestItems(url)
      .subscribe(data => {
        for (let vehicleJson of data) {
          if (vehicleJson['vehicleType']['type'] == this.idVehicleType || this.idVehicleType=='all') {
            let vehicle: Vehicle = new Vehicle();
            vehicle.idVehicle = vehicleJson['idVehicle'];
            vehicle.name = vehicleJson['name'];
            vehicle.type = vehicleJson['vehicleType']['type'];
            this.listVehicles.push(vehicle);
          }
        }
      });
  }

}