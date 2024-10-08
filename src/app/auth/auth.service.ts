import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface SignupData {
  name: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:5000/api/users'; // Your backend API URL

  constructor(private http: HttpClient) {}

  signup(signupData: SignupData): Observable<any> {
    return this.http.post(`${this.apiUrl}/signup`, signupData);
  }
}
