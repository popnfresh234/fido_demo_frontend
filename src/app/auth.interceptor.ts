import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { LocalStorageService } from './services/local_storage/local-storage.service';
import { Router } from '@angular/router';

import { inject } from '@angular/core';
import { tap } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const localStorageSerice = inject(LocalStorageService);
  const router = inject(Router);
  if (localStorageSerice.getData('token')) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${localStorageSerice.getData('token')}`,
      },
    });
  }

  // Handle unauthorized requests
  return next(req).pipe(
    tap({
      next: () => {},
      error: (err) => {
        if (err instanceof HttpErrorResponse) {
          localStorageSerice.clearData();
          router.navigateByUrl('/login');
        }
      },
    })
  );
};
