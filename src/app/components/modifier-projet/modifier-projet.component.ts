import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {projet} from "../../model/projet.model";
import {ProjetsService} from "../../services/projet.service";

@Component({
  selector: 'app-modifier-projet',
  templateUrl: './modifier-projet.component.html',
  styleUrls: ['./modifier-projet.component.css']
})
export class ModifierProjetComponent implements OnInit {

  formValue !: FormGroup;
  projetModelObj:projet=new projet();
  constructor(private formBuilder:FormBuilder,private ProjetsService:ProjetsService) { }

  ngOnInit(): void {
    this.formValue=this.formBuilder.group({

      Description: [''],
      BudgetTotal: [''],
      Budget: [''],
      Etat: [''],
    })
  }

  // updateEmployee(row:any){
  //
  //
  //
  //   this.projetModelObj.id=row.id;
  //   this.formValue.controls['Description'].setValue(row.Description);
  //   this.formValue.controls['Budget'].setValue(row.Budget);
  //   this.formValue.controls['BudgetTotal'].setValue(row.BudgetTotal);
  //   this.formValue.controls['Etat'].setValue(row.Etat);
  //
  // }
  updateEmployeeDetails(){


    this.projetModelObj.Description=this.formValue.value.Description;
    this.projetModelObj.Budget=this.formValue.value.Budget;
    this.projetModelObj.Etat=this.formValue.value.Etat;
    this.projetModelObj.BudgetTotal=this.formValue.value.BudgetTotal;
    this.ProjetsService.updateData(this.projetModelObj,this.projetModelObj.id).subscribe(a=>{
      alert("Record updated Succesfully");

      let cancel=document.getElementById("cancel");

      cancel?.click();
      this.formValue.reset();
    })
  }

}
