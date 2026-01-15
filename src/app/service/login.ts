import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, map, catchError, shareReplay, BehaviorSubject, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiBase = '/api';
  user$ = new BehaviorSubject<any | null>(null);
  private me$?: Observable<boolean>;
  private meCache$?: Observable<boolean>;

  constructor(private http: HttpClient) { }

  me(): Observable<any> {
    return this.http.get<any>(`${this.apiBase}/me.php`, { withCredentials: true }).pipe(
      tap(res => this.user$.next(res.ok ? (res.user ?? true) : null))
    );
  }

  login(user: string, pass: string): Observable<any> {
    return this.http.post<any>(`${this.apiBase}/login.php`, { user, pass }, { withCredentials: true }).pipe(
      tap(() => {
        // refresca sesión/usuario al logear
        this.me().subscribe();
      })
    );
  }
  isLoggedIn(force = false): Observable<boolean> {
    if (force || !this.meCache$) {
      this.meCache$ = this.http.get<{ ok: boolean }>('/api/me.php', { withCredentials: true }).pipe(
        map(r => !!r.ok),
        catchError(() => of(false)),
        shareReplay(1)
      );
    }
    return this.meCache$;
  }

  logout(): Observable<any> {
    return this.http.post<any>(`${this.apiBase}/logout.php`, {}, { withCredentials: true }).pipe(
      tap(() => this.user$.next(null))
    );
  }

  clearAuthCache(): void {
    this.meCache$ = undefined;
  }
}
