import { inject } from "@angular/core"
import { Router } from "@angular/router"
import { LocalStorageService } from "../services/local_storage/local-storage.service"

export const adminGuard = () => {
    const localStorageService: LocalStorageService = inject(LocalStorageService)
    const router = inject(Router);
    if (localStorageService.getData("role") === 'ROLE_ADMIN') {
        router.navigateByUrl('/news/edit');
        return false;
    }
    return true;
}