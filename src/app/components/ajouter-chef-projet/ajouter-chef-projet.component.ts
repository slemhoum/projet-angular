import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {projet} from "../../model/projet.model";
import {ChefProjetsService} from "../../services/ChefProjet.service";
import {Chefprojet} from "../../model/ChefProjet.model";

@Component({
  selector: 'app-ajouter-chef-projet',
  templateUrl: './ajouter-chef-projet.component.html',
  styleUrls: ['./ajouter-chef-projet.component.css']
})
export class AjouterChefProjetComponent implements OnInit {

  formValue !: FormGroup;
  ChefprojetModelObj:Chefprojet=new Chefprojet();
  constructor(private formBuilder:FormBuilder,private ChefProjetsService:ChefProjetsService) { }

  ngOnInit(): void {
    this.formValue=this.formBuilder.group({

      Telephone:[''],
      Nom:[''],
      Prenom:[''],
      Username:[''],
      Password:[''],


    })

  }

  postChefProjetDetails(){
//alert("fucntion call");
    this.ChefprojetModelObj.id=this.formValue.value.id ;

    this.ChefprojetModelObj.nom=this.formValue.value.Nom;
    this.ChefprojetModelObj.prenom=this.formValue.value.Prenom;
    this.ChefprojetModelObj.Tel=this.formValue.value.Telephone;
    this.ChefprojetModelObj.username=this.formValue.value.Username;
    this.ChefprojetModelObj.Password=this.formValue.value.Password;

    let cancel=document.getElementById("cancel");
    this.ChefProjetsService.save(this.ChefprojetModelObj).subscribe(a=> {

      console.log(a);
      alert("Record inserted successfully");
      cancel?.click();this.formValue.reset();

    })
  }

}
