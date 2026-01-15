import { CanMatchFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './service/login';
import { map } from 'rxjs';

export const guestMatchGuard: CanMatchFn = () => {
    const auth = inject(AuthService);
    const router = inject(Router);

    return auth.isLoggedIn().pipe(
        map(isIn => isIn ? router.createUrlTree(['/home']) : true)
    );
};
