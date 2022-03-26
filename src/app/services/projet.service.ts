import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {map, Observable} from "rxjs";
import {Demande} from "../model/demande.model";
import {projet} from "../model/projet.model";

@Injectable({providedIn:"root"})
export class ProjetsService{
  constructor(private http:HttpClient ) {
  }
  getAllProjet():Observable<projet[]>{
    let host=environment.host;
    return this.http.get<projet[]>(host+"/Projet");
  }
  getAllProjetComplet():Observable<projet[]>{
    let host=environment.host;
    return this.http.get<projet[]>(host+"/Projet?Status=true");
  }
  getAllProjetNoComlet():Observable<projet[]>{
    let host=environment.host;
    return this.http.get<projet[]>(host+"/Projet?Status=false");
  }
  save(projet:projet):Observable<projet>{
    let host=environment.host;
    return this.http.post<projet>(host+"/Projet",projet);
  }

  deleteData(id:number){
    let host=environment.host;
    return this.http.delete<any>(host+"/Projet/"+id).pipe(map((res:any)=>{
      return res;
    }))
  }

  updateData(data:any,id:number){
    return this.http.put<any>("http://localhost:3000/Projet/"+id,data).pipe(map((res:any)=>{
      return res;
    }))
  }
}
