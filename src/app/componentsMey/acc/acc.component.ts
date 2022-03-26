import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Acc } from 'src/app/model/Acc.model';
import { AccsService} from "../../services/Acc.service";
@Component({
  selector: 'app-acc',
  templateUrl: './acc.component.html',
  styleUrls: ['./acc.component.css']
})
export class AccComponent implements OnInit {

  Acc:Acc[] |null=null;
  formValue !: FormGroup;
  AccModelObj:Acc=new Acc();
  constructor(private AccsService:AccsService,private formBuilder:FormBuilder) {
    this.AccsService.getAllAcc().subscribe(data=>{
      this.Acc=data;
    })
  }

  ngOnInit(): void {
    this.formValue=this.formBuilder.group({

      Telephone:[''],
      Nom:[''],
      Prenom:[''],
      Username:[''],
      Password:[''],


    })
  }
  postAccDetails(){
    //alert("fucntion call");
        this.AccModelObj.id=this.formValue.value.id ;
    
        this.AccModelObj.nom=this.formValue.value.Nom;
        this.AccModelObj.prenom=this.formValue.value.Prenom;
        this.AccModelObj.Tel=this.formValue.value.Telephone;
        this.AccModelObj.username=this.formValue.value.Username;
        this.AccModelObj.Password=this.formValue.value.Password;
    
        let cancel=document.getElementById("cancel");
        this.AccsService.save(this.AccModelObj).subscribe(a=> {
    
          console.log(a);
          alert("Record inserted successfully");
          cancel?.click();this.formValue.reset();
    
        })
      }
  deleteAcc(p:any) {

    this.AccsService.deleteData(p.id).subscribe(a => {
      alert("Record Deleted Succesfully");
      this.AccsService.getAllAcc().subscribe(data=>{
        this.Acc=data;
      })
    })
  }
}

