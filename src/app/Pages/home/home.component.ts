// home.component.ts
import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  usuariosAsync: any[] = [];
  isLoading: boolean = true;
  isError: boolean = false;

  constructor(private usuariosService: UsuariosService) {}

  ngOnInit(): void {
    this.getUsuarios();
  }

  async getUsuarios() {
    try {
      const results = await this.usuariosService.getAllPromise();
      console.log("Datos", results);
      this.usuariosAsync = results;
      this.isLoading = false;
    } catch(e) {
      console.log(e);
      this.isError = true;
    }
  }
}
