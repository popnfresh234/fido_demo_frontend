import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../services/local_storage/local-storage.service';

export const adminGuard = () => {
  const localStorageService: LocalStorageService = inject(LocalStorageService);
  const router = inject(Router);
  const roles: string[] = JSON.parse(
    localStorageService.getData('role') ?? '[]'
  );
  if (roles.indexOf('ROLE_ADMIN') >= 0) {
    router.navigateByUrl('/news/edit');
    return false;
  }
  return true;
};
