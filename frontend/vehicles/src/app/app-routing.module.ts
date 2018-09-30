import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VehicleComponent } from './vehicle/vehicle.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';


const routes: Routes = [
  { path: 'vehicle/:idVehicle', component: VehicleComponent },
  { path: 'vehicles/:idVehicleType', component: VehiclesComponent },
  { path: 'addVehicle', component: AddVehicleComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
