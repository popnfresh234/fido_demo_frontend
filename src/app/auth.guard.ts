import { inject } from "@angular/core"
import { Router } from "@angular/router"
import { LocalStorageService } from "./services/local-storage.service"

export const authGuard = () => {
    const localStorageService: LocalStorageService = inject(LocalStorageService)
    const router = inject(Router);
    if (localStorageService.getData("auth") !== 'true') {
        router.navigateByUrl('/login');
        return false;
    }
    return true;
}