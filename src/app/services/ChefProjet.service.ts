import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {map, Observable} from "rxjs";

import {Chefprojet} from "../model/ChefProjet.model";

@Injectable({providedIn:"root"})
export class ChefProjetsService{
  constructor(private http:HttpClient ) {
  }
  getAllChefprojet():Observable<Chefprojet[]>{
    let host=environment.host;
    return this.http.get<Chefprojet[]>(host+"/Chefprojet");
  }


  save(Chefprojet:Chefprojet):Observable<Chefprojet>{
    let host=environment.host;
    return this.http.post<Chefprojet>(host+"/Chefprojet",Chefprojet);
  }

  deleteData(id:number){
    let host=environment.host;
    return this.http.delete<any>(host+"/Chefprojet/"+id).pipe(map((res:any)=>{
      return res;
    }))
  }

  updateData(data:any,id:number){
    return this.http.put<any>("http://localhost:3000/Chefprojet/"+id,data).pipe(map((res:any)=>{
      return res;
    }))
  }
}
