import { Component, OnInit } from '@angular/core';
import {DemandesService} from "../../services/demandes.service";
import {Demande} from "../../model/demande.model";

@Component({
  selector: 'app-liste-demandes',
  templateUrl: './liste-demandes.component.html',
  styleUrls: ['./liste-demandes.component.css']
})
export class ListeDemandesComponent implements OnInit {
  Demandes:Demande[] |null=null;
  constructor(private DemandesService:DemandesService) {
    this.DemandesService.getAllDemandes().subscribe(data=>{
      this.Demandes=data;
    })
  }

  ngOnInit(): void {
  }

}
