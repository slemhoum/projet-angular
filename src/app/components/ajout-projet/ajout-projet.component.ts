import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validator, Validators} from "@angular/forms";
import {projet} from "../../model/projet.model";
import {ProjetsService} from "../../services/projet.service";

@Component({
  selector: 'app-ajout-projet',
  templateUrl: './ajout-projet.component.html',
  styleUrls: ['./ajout-projet.component.css']
})
export class AjoutProjetComponent implements OnInit {
  formValue !: FormGroup;
  projetModelObj:projet=new projet();
  constructor(private formBuilder:FormBuilder,private ProjetsService:ProjetsService) { }

  ngOnInit(): void {
    this.formValue=this.formBuilder.group({

      Description:[''],
      BudgetTotal:[''],
      Budget:[''],
      Etat:[''],


    })

    // this.ProjetFormGroup=this.formBuilder.group({
    //   Description: ["",Validators.required],
    //   BudgetTotal: ["",Validators.required],
    //   Budget: ["",Validators.required],
    //   Etat: [0,Validators.required]

  }


  postEmployeeDetails(){
//alert("fucntion call");
    this.projetModelObj.id=this.formValue.value.id ;

    this.projetModelObj.Description=this.formValue.value.Description;
    this.projetModelObj.Budget=this.formValue.value.Budget;
    this.projetModelObj.Etat=this.formValue.value.Etat;
    this.projetModelObj.BudgetTotal=this.formValue.value.BudgetTotal;

    let cancel=document.getElementById("cancel");
    this.ProjetsService.save(this.projetModelObj).subscribe(a=> {

      console.log(a);
      alert("Record inserted successfully");
      cancel?.click();this.formValue.reset();

    })
  }

}
