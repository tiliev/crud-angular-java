import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable()
export class ApiService {
  constructor(private http: HttpClient) { }

  restItemsServiceGetRestItems(url) {
    return this.http
      .get<Object[]>(url)
      .pipe(map(data => data));
  }
}
