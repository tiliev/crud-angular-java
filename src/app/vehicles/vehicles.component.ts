import { Component, OnInit, Input, AfterContentInit } from '@angular/core';
import { Vehicle } from '../vehicle';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { Router} from '@angular/router';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css'],
})
export class VehiclesComponent implements OnInit {

  @Input('idVehicleType') idVehicleType: String = this.activatedRoute.snapshot.params['idVehicleType'];

  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute, private router: Router) {
   }

  ngOnInit() {
    this.getVehicles();
  }


  listVehicles: Vehicle[] = new Array();

  getVehicles() {
    console.log('getVehicles() called');
    let url = 'https://localhost:8443/vehicles/getAllVehicles';

    this.apiService.restItemsServiceGetRestItems(url)
      .subscribe(data => {
        this.listVehicles = new Array();
        for (let vehicleJson of data) {
          if (vehicleJson['vehicleType']['type'] == this.idVehicleType || this.idVehicleType == 'all') {
            let vehicle: Vehicle = new Vehicle();
            vehicle.idVehicle = vehicleJson['idVehicle'];
            vehicle.name = vehicleJson['name'];
            vehicle.type = vehicleJson['vehicleType']['type'];
            this.listVehicles.push(vehicle);
          }
        }
      });
  }

  deleteVehicle(vehicleId) {
    this.apiService.restItemsServiceGetRestItems('https://localhost:8443/vehicles/deleteVehicle/' + vehicleId)
      .subscribe(data => console.log("vehicle deleted"));
      this.getVehicles();
      }
}