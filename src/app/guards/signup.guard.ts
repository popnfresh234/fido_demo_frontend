import { inject } from "@angular/core"
import { Router } from "@angular/router"
import { LocalStorageService } from "../services/local_storage/local-storage.service"

export const signupGuard = () => {
    const localStorageService: LocalStorageService = inject(LocalStorageService)
    const router = inject(Router);
    if (localStorageService.getData("auth") === 'true') {
        router.navigateByUrl('/');
        return false;
    }
    return true;
}