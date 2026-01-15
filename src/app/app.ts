import { Component, signal, computed } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar';
import { FooterComponent } from './components/footer/footer';
<<<<<<< HEAD

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
=======
import { Login } from './components/login/login';
import { AuthService } from './service/login';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, Login],
>>>>>>> 62fe170 (ruleta, corrección promociones y wallet)
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = signal('pagina-b2b');

  // estados
  loading = signal(true);
  user = signal<any | null>(null);

  isLoggedIn = computed(() => !!this.user());

  constructor(private authService: AuthService) {
    this.authService.me().subscribe({
      next: (res) => {
        if (res.ok) {
          // ideal: res.user, si tu endpoint lo devuelve
          this.user.set(res.user ?? true);
        } else {
          this.user.set(null);
        }
        this.loading.set(false);
      },
      error: () => {
        this.user.set(null);
        this.loading.set(false);
      }
    });
  }
}
