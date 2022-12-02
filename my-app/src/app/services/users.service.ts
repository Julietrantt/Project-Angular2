import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../Interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  public getUsers (): Observable<User[]> {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users')
  }
}
