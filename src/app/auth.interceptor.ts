import { HttpInterceptorFn } from '@angular/common/http';
import { LocalStorageService } from './services/local_storage/local-storage.service';
import { inject } from '@angular/core';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const localStorageSerice = inject(LocalStorageService);
  if (localStorageSerice.getData("token")) {

    req = req.clone({
      setHeaders: { Authorization: `Bearer ${localStorageSerice.getData("token")}` }
    });
  }

  return next(req);
};
