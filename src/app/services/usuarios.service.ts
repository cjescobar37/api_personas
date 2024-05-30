import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  getByAlumno(id: any) {
    return lastValueFrom(this.http.get(`https://randomuser.me/api/${id}`));
  }

  getAllPromise() {
    return lastValueFrom(this.http.get("https://randomuser.me/api/?results=30").pipe(
      map((response: any) => response.results)
    ));
  }

  // Métodos de creación, actualización y eliminación no necesitan correcciones.
  }
  