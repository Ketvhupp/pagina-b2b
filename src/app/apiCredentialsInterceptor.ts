import { HttpInterceptorFn } from '@angular/common/http';

export const apiCredentialsInterceptor: HttpInterceptorFn = (req, next) => {
    const apiBase = 'http://192.168.102.232/prueba_tienda.test/api'; // ajusta
    if (req.url.startsWith(apiBase)) {
        req = req.clone({ withCredentials: true });
    }
    return next(req);
};
