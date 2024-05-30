import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  
  alumnos:any
  isLoading:boolean = true
  isError:boolean = false
  constructor(
    private activatedRoute: ActivatedRoute,
    private usuariosService: UsuariosService 
  ) { 

    const id = this.activatedRoute.snapshot.paramMap.get("id")
    console.log("IDDD", id)
    this.usuariosService.getByAlumno(id)

    .then(data =>{
        this.alumnos = data
        console.log("BIEEEN", this.alumnos)
        this.isLoading = false
        this.isError = false
    })
    .catch(err =>{
      console.log(err)
      this.isError = true
    })
    .finally(() =>{
      this.isLoading = false
      
    })
  }
  ngOnInit(): void {
  }

}
