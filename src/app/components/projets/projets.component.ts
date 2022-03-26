import { Component, OnInit } from '@angular/core';
import {Demande} from "../../model/demande.model";
import {projet} from "../../model/projet.model";
import {ProjetsService} from "../../services/projet.service";

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.css']
})
export class ProjetsComponent implements OnInit {

  projet:projet[] |null=null;
  constructor(private ProjetsService:ProjetsService) {
    this.ProjetsService.getAllProjet().subscribe(data=>{
      this.projet=data;
    })
  }

  ngOnInit(): void {
  }


  deleteProjet(p:any) {

    this.ProjetsService.deleteData(p.id).subscribe(a => {
      alert("Record Deleted Succesfully");
      this.ProjetsService.getAllProjet();
    })
  }
}
