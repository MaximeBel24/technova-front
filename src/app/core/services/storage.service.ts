import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

const TOKEN = 'ecom-token';
const USER = 'ecom-user';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  private isBrowser(): boolean {
    return (
      typeof window !== 'undefined' &&
      typeof window.localStorage !== 'undefined'
    );
  }

  public saveToken(token: string): void {
    if (this.isBrowser()) {
      window.localStorage.removeItem(TOKEN);
      window.localStorage.setItem(TOKEN, token);
    }
  }

  public saveUser(user: Object): void {
    if (this.isBrowser()) {
      window.localStorage.removeItem(USER);
      window.localStorage.setItem(USER, JSON.stringify(user));
    }
  }

  static getToken(): string | null {
    if (
      typeof window !== 'undefined' &&
      typeof window.localStorage !== 'undefined'
    ) {
      let token = window.localStorage.getItem(TOKEN) || null;
      return token;
    }
    return null;
  }

  static getUser(): any {
    if (
      typeof window !== 'undefined' &&
      typeof window.localStorage !== 'undefined'
    ) {
      let user = JSON.parse(window.localStorage.getItem(USER) || '{}');
      console.log('Utilisateur : ' + user);
      return user;
    }
    return null;
  }

  static getUserId(): string {
    const user = this.getUser();
    if (user == null) {
      return '';
    }
    console.log('ID User : ' + user.userId);
    return user.userId;
  }

  static getUserRoles(): string[] {
    const token = window.localStorage.getItem('ecom-token');

    if (!token) {
      console.log('⚠️ Aucun token trouvé !');
      return [];
    }

    try {
      const decodedToken: any = jwtDecode(token);
      console.log('✅ Token décodé :', decodedToken);

      if (decodedToken.roles && Array.isArray(decodedToken.roles)) {
        console.log('✅ Rôles récupérés :', decodedToken.roles);
        return decodedToken.roles; // ✅ Retourne tous les rôles
      }
    } catch (error) {
      console.error('❌ Erreur lors du décodage du token :', error);
    }

    return [];
  } 

  static isAdminLoggedIn(): boolean {
    const token = this.getToken();
    if (!token) {
      console.log('⚠️ Aucun token trouvé, admin non connecté.');
      return false;
    }

    const roles = this.getUserRoles();
    console.log('🔍 Vérification des rôles Admin :', roles);

    return roles.includes('ADMIN'); // ✅ Vérifie si ADMIN est dans la liste
  }

  static isUserLoggedIn(): boolean {
    const token = this.getToken();
    if (!token) {
      console.log('⚠️ Aucun token trouvé, utilisateur non connecté.');
      return false;
    }

    const roles = this.getUserRoles();
    console.log('🔍 Vérification des rôles User :', roles);

    return roles.includes('USER'); // ✅ Vérifie si USER est dans la liste
  }

  static signOut(): void {
    if (
      typeof window !== 'undefined' &&
      typeof window.localStorage !== 'undefined'
    ) {
      localStorage.removeItem('ecom-token');
      localStorage.removeItem('ecom-user');
      window.location.reload();
    }
  }
}
