import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {User} from "../models/User";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject: Subject<User> = new Subject<User>();
  userStream: Observable<User> = this.userSubject.asObservable();

  constructor() {
  }

  setUser(user: User): void {
    this.userSubject.next(user);
  }
}
