import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ListResponse } from './list-response';
import {  map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  endpoint: string = `${ environment.api }Fondos/`;

  constructor(
    private http: HttpClient
  ) { }


  get() {
    return this.http.get<ListResponse>(this.endpoint  + "getFondos" ).pipe(
            map((data: any) => data)
    )
  }
  
  createItem(item:any={}){
    return this.http.post(this.endpoint  + 'Store', item);
  }

  update(item:any={}){
    return this.http.put(this.endpoint  + 'Edit', item);
  }


}
