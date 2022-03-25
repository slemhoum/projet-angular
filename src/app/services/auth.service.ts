import { Injectable } from '@angular/core';
import {IUser} from "../models/iuser";
import {DataService} from "./data.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private data: DataService) { }

  logIn(user: IUser): boolean {
    const users: IUser[] = this.data.users;
    console.log(user);
    console.log(users);
    const userExist = users
      .filter(u => u.mdp == user.mdp && u.firstName == user.firstName);
    if(userExist.length) {
      this.data.curUser = userExist[0];
    }
    return userExist.length > 0;
  }


  logOut() {

  }
}
