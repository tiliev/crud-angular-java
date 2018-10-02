import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { VehicleType } from '../vehicle';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css']
})

@Injectable()
export class AddVehicleComponent implements OnInit {

  extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  handleErrorPromise(error: Response | any) {
    console.error(error.message || error);
    return Promise.reject(error.message || error);
  }
  typeOfVehicles: SelectItem[];

  typeSelected: VehicleType;

  constructor(private http: HttpClient,private router: Router) {
    this.typeOfVehicles =
      [{ label: 'Select Type', value: null },
      { label: 'Bike', value: { idVehicleType: 1, name: 'Bike' } },
      { label: 'Motorbike', value: { idVehicleType: 2, name: 'Motorbike' } },
      { label: 'Car', value: { idVehicleType: 3, name: 'Car' } }];
  }

  test(name, description, vehicleType) {
    var jsonToPost = '{'
      + '"name" : "' + name + '",'
      + '"description"  : "' + description + '",'
      + '"vehicleType" : ' + JSON.stringify(vehicleType)
      + '}';

    let url = 'https://80.102.242.229:8443/vehicles/addVehicle';

    this.http.post(url, jsonToPost, httpOptions)
      .subscribe(data => this.router.navigateByUrl('/vehicles/all'));
  }

  ngOnInit() {
  }
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};