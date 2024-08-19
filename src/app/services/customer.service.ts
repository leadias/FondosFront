import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ListResponse } from './list-response';
import {  map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CustomerResponse } from './customer-response';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

    endpoint: string = `${ environment.api }Clientes/`;

    constructor(
      private http: HttpClient
    ) { }

    get() {
        return this.http.get<CustomerResponse>(this.endpoint  + "getCliente" ).pipe(
                map((data: any) => data)
        )
      }
      
    update(item:any={}){
        return this.http.put(this.endpoint + 'Edit', item);
      }
}