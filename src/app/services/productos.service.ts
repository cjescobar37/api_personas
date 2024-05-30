import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(
    private http:HttpClient
  
  ) { }

  getAll(){
    return this.http.get("https://randomuser.me/api/")
  }
  create(body:any){
    return this.http.post("https://randomuser.me/api/", body)
  }
  update(body:any){
  return this.http.put("https://randomuser.me/api/", body)
  }
  delete(){
    return this.http.delete("https://randomuser.me/api")
  }
}
