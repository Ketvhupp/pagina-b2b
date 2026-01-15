import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Buscar {
  private apiBase = '/api';
  constructor(private http: HttpClient) { }

  buscar(query: string): Observable<any> {
    return this.http.get<any>(`${this.apiBase}/buscar.php?query=${query}`, { withCredentials: true });
  }
}
