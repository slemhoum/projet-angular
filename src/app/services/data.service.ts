import { Injectable } from '@angular/core';
import {IUser} from "../models/iuser";
import dbContent from '../../assets/data/db.json'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _curUser: IUser = <IUser>{};
  private _users: IUser[] = [];

  constructor() {
    this.users = dbContent.users;
    if (
      sessionStorage.getItem("user") &&
      sessionStorage.getItem("user") != "undefined"
    ) {
      this.curUser = JSON.parse(<string>sessionStorage.getItem("user"));
    }
  }

  get curUser() {
    return this._curUser;
  }

  set curUser(value) {
    this._curUser = value;
  }

  get users() {
    return this._users;
  }

  set users(value) {
    this._users = value;
  }


}
