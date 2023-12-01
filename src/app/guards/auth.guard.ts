import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../services/local_storage/local-storage.service';
import jwtDecode from 'jwt-decode';
import { TokenModel } from '../models/token_model';

export const authGuard = () => {
  const localStorageService: LocalStorageService = inject(LocalStorageService);
  const router = inject(Router);
  if (localStorageService.getData('auth') !== 'true') {
    router.navigateByUrl('/login');
    return false;
  }

  // Check for token
  if (!localStorageService.getData('token')) {
    localStorageService.clearData();
    router.navigateByUrl('/login');
  }

  // Verify token
  if (localStorageService.getData('token')) {
    const token = localStorageService.getData('token');

    try {
      // Check expiry
      const jwt = jwtDecode<TokenModel>(token ? token : '');
      const currentEpoch = new Date().getTime() / 1000;
      if (currentEpoch > parseInt(jwt.exp)) {
        localStorageService.clearData();
        router.navigateByUrl('/login');
      }
    } catch (error) {
      // Boot if malformed token
      localStorageService.clearData();
      router.navigateByUrl('/login');
    }
  }
  return true;
};
