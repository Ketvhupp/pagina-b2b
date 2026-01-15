import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../service/login';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.html'
})

export class Login {
  loading = false;
  errorMsg = '';
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {
    this.form = this.fb.group({
      user: ['', [Validators.required]],
      pass: ['', [Validators.required]],
    });
  }

  submit(): void {
    this.errorMsg = '';

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const user = this.form.value.user as string;
    const pass = this.form.value.pass as string;

    this.loading = true;

    this.auth.login(user, pass).subscribe({
      next: (res) => {
        if (res.ok) {
          this.auth.clearAuthCache();
          this.auth.me().subscribe({
            next: () => this.router.navigateByUrl('/home'),
            error: () => this.router.navigateByUrl('/login'),
          });
        } else {
          this.errorMsg = res.error ?? 'Usuario o contraseña inválidos.';
        }
        this.loading = false;
      },
      error: (err) => {
        this.errorMsg =
          err?.error?.error ??
          'No fue posible iniciar sesión. Revisa la conexión o credenciales.';
        this.loading = false;
      }
    });
  }
}
