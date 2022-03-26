import { Component, OnInit } from '@angular/core';
import {Chefprojet} from "../../model/ChefProjet.model";
import {ChefProjetsService} from "../../services/ChefProjet.service";

@Component({
  selector: 'app-liste-chef-projets',
  templateUrl: './liste-chef-projets.component.html',
  styleUrls: ['./liste-chef-projets.component.css']
})
export class ListeChefProjetsComponent implements OnInit {
  Chefprojet:Chefprojet[] |null=null;
  constructor(private ChefProjetsService:ChefProjetsService) {
    this.ChefProjetsService.getAllChefprojet().subscribe(data=>{
      this.Chefprojet=data;
    })
  }

  ngOnInit(): void {
  }

  deleteChefProjet(p:any) {

    this.ChefProjetsService.deleteData(p.id).subscribe(a => {
      alert("Record Deleted Succesfully");
      this.ChefProjetsService.getAllChefprojet().subscribe(data=>{
        this.Chefprojet=data;
      })
    })
  }
}
