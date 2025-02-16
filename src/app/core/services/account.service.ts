import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environment/environment';
import { map, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

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
