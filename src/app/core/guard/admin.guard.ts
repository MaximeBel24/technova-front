import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage.service';

export const AdminGuard = () => {
  const router = inject(Router);
  if(!StorageService.isAdminLoggedIn()){
    router.navigateByUrl('/**');
    return false;
  }
  return true;
};
