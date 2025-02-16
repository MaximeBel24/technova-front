import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { StorageService } from '../../core/services/storage.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean = false;
  isAdmin: boolean = false;

  private router = inject(Router);

  ngOnInit() {
      this.updateUserStatus();
  }

  updateUserStatus() {
    this.isLoggedIn =
      StorageService.isUserLoggedIn() || StorageService.isAdminLoggedIn();
    this.isAdmin = StorageService.isAdminLoggedIn();

  }

  logout() {
    StorageService.signOut();
    this.router.navigateByUrl('/login');
  }
}
