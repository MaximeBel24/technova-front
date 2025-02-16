import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AccountService } from '../../../core/services/account.service';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  private accountService = inject(AccountService);
  private snackBar = inject(MatSnackBar);
  private router = inject(Router);

  registerForm: FormGroup = new FormGroup ({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl('')
  })

  onSubmit() {
    this.accountService.register(this.registerForm.value).subscribe(
      (response) => {
        this.snackBar.open('Inscription réussie!', 'Fermer', { duration: 5000 });
        this.router.navigateByUrl('/login');
      },
      (error) => {
        this.snackBar.open('L\'inscription à échouée. Veuillez réessayer', 'Close', {
          duration: 5000,
          panelClass: 'error-snackbar',
        });
      }
    );
  }

}
