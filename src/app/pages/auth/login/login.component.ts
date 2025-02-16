import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AccountService } from '../../../core/services/account.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { StorageService } from '../../../core/services/storage.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  private accountService = inject(AccountService);
  private router = inject(Router);
  private snackBar = inject(MatSnackBar);

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  onSubmit(): void {
    const email = this.loginForm.get('email')!.value;
    const password = this.loginForm.get('password')!.value;

    this.accountService.login(email, password).subscribe(
      (res) => {
        this.snackBar.open('Connexion réussie!', 'Fermer', { duration: 5000 });
        if (StorageService.isAdminLoggedIn()) {
          let destination: string = '/admin';
          this.router.navigateByUrl(destination);
        } else if (StorageService.isUserLoggedIn()) {
          let destination: string = '/user-dashboard';
          this.router.navigateByUrl(destination);
        }
      },
      (error) => {
        this.snackBar.open(
          "Nom d'utilisateur ou mot de passe invalide",
          'ERREUR',
          {
            duration: 5000,
          }
        );
      }
    );
  }
}
