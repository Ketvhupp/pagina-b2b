import { CanMatchFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './service/login';
import { map } from 'rxjs';

export const authMatchGuard: CanMatchFn = () => {
    return true;
    /*const auth = inject(AuthService);
    const router = inject(Router);

    return auth.isLoggedIn().pipe(
        map(isIn => isIn ? true : router.createUrlTree(['/login']))
    );*/
};
