import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
  name = 'Angular';

  items: MenuItem[];

  ngOnInit() {
    this.items = [
      { label: 'Home', icon: 'fa fa-fw fa-bar-chart', routerLink: [''] },
      { label: 'Vehicles', icon: 'fa fa-fw fa-calendar', routerLink: ['vehicles/all'] },
      { label: 'Add Vehicle', icon: 'fa fa-fw fa-book', routerLink: ['addVehicle'] }
    ];
  }

  constructor() { }

}

