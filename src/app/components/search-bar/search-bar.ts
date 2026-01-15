// search.component.ts
import { Component, signal, computed, OnInit, } from '@angular/core';
import { FormsModule } from '@angular/forms'; // O Signal Forms si prefieres la nueva API experimental
import { Buscar } from '../../service/buscar';
import { Subject, tap } from 'rxjs';
import { filter } from 'rxjs/operators';
import { debounceTime } from 'rxjs/operators';
import { distinctUntilChanged } from 'rxjs/operators';
import { switchMap } from 'rxjs/operators';


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
  selector: 'app-buscador',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-bar.html'
})
export class SearchComponent implements OnInit {
  // Lista original de datos
  searchTerm = signal('');
  searchResults: producto[] = [];

  private searchSubject = new Subject<string>();

  constructor(private buscar: Buscar) {


  }

  // Lista filtrada derivada (se actualiza automáticamente cuando searchTerm cambia)

  updateSearch(event: Event) {
    const input = event.target as HTMLInputElement;
    this.searchTerm.set(input.value);
  }
  ngOnInit() {
    this.searchSubject.pipe(
      tap(term => console.log('Buscando:', term)), // Para depurar
      filter(term => term.trim().length > 2), // Solo buscar si tiene más de 2 caracteres
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(term => this.buscar.buscar(term)) // Llama a tu servicio
    ).subscribe(results => {
      this.searchResults = results.data;
    });
  }
  onSearch() {
    this.searchSubject.next(this.searchTerm());
  }
}