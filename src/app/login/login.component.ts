import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {IUser} from "../models/iuser";
import {UtilService} from "../services/util.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public msgErr = false;
  public user: IUser = {
    dateN: "", email: "", firstName: "", id: 0, mdp: "", profil: "", tel: "Admin"
  }

  constructor(private auth: AuthService, private util: UtilService) { }

  ngOnInit(): void {
  }

  logIn(user: IUser) {
    if(this.auth.logIn(user)) {
      if (user.tel=="chefservice"){this.util.navigateTo("homeChefService");}
      else{
        if (user.tel=="admin"){this.util.navigateTo("homeAdmin");}
       else{
         if (user.tel=="accueil"){this.util.navigateTo("client");}
         else{this.util.navigateTo("homeChefProjet");}
        }
      }
    } else {
      this.msgErr = true;
    }
  }

}
