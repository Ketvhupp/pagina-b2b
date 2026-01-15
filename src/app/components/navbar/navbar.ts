import { Component, Input, Output, EventEmitter, NgModule } from '@angular/core';
import { Buscar } from '../../service/buscar';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from '../search-bar/search-bar';
import { RouterLink } from '@angular/router';

interface producto {
  codigo: string,
  nombre: string,
  precio: number,
  stock: number,
  imagen: string,
  descripcion: string,
  laboratorio: string
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [SearchComponent, RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})

export class NavbarComponent {
  form: FormGroup;
  productos: producto[] = [];
  modal: number = 0;
  constructor(private fb: FormBuilder, private buscar: Buscar) {
    this.form = this.fb.group({
      buscar_central: ['', [Validators.minLength(3)]],
    });

  }
  buscar_central() {
    if (this.form.valid) {
      this.buscar.buscar(this.form.value.buscar_central).subscribe((res) => {
        if (res.res == "ok") {
          const productos: producto[] = res.data;
          this.productos = productos;
          this.modal = 1;
        }
      });
    }
  }
}
