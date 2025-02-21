import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "../home/home.component";
import { AdminNavbarComponent } from "./admin-navbar/admin-navbar.component";

@Component({
  selector: 'app-admin',
  imports: [RouterOutlet, AdminNavbarComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {

}
