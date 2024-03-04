import { Injectable } from '@angular/core';
import { apiServer } from '../apiServer';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';



@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private ApiUrl: string = apiServer.serverUrl

  constructor(private httpClient: HttpClient ) {

   }

  public getProducto(){
    return this.httpClient.get(`${this.ApiUrl}/productos`);
  }

  public getProductoById(id: number){
    return this.httpClient.get(`${this.ApiUrl}/${id}`);
  }
  
  obtenerProductoPorId(id: string): Observable<any> {
    const url = `${this.ApiUrl}/productos/${id}`;
    return this.httpClient.get<any>(url);
  }
  

}
