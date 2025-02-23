import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environment/environment';
import { map, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StorageService } from './storage.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private jwtHelper = new JwtHelperService();

  constructor() {}

  getToken(): string | null {
    return localStorage.getItem('ecom-token'); // Récupère le token stocké
  }

  getUserId(): number | null {
    const token = this.getToken();
    if (token) {
      const decodedToken = this.jwtHelper.decodeToken(token);
      return decodedToken?.id || null; // Récupère l'ID stocké dans le token
    }
    return null;
  }

  private apiUrl = `${environment.apiUrl}/account`;

  private http = inject(HttpClient);
  private storageService = inject(StorageService);

  register(registerRequest: any): Observable<any> {
    return this.http.post(this.apiUrl+"/register", registerRequest, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  login(email: string, password: string): Observable<boolean> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = {email, password};

    return this.http.post(this.apiUrl+"/login", body, {headers, observe: 'response'}).pipe(
      map((res) => {
        const authorizationHeader = res.headers.get('Authorization');
        const token = authorizationHeader ? authorizationHeader.substring(7) : null;
        const user = res.body;
        if(token && user){
          this.storageService.saveToken(token);
          this.storageService.saveUser(user);
          return true;
        }
        return false;
      })
    );    
  }
}
