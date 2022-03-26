import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Demande} from "../model/demande.model";

@Injectable({providedIn:"root"})
export class DemandesService{
  constructor(private http:HttpClient ) {
  }
  getAllDemandes():Observable<Demande[]>{
    let host=environment.host;
    return this.http.get<Demande[]>(host+"/Demande");
  }
  getAllDemandesAccepter():Observable<Demande[]>{
    let host=environment.host;
    return this.http.get<Demande[]>(host+"/Demande?Status=true");
  }
  getAllDemandesRefuser():Observable<Demande[]>{
    let host=environment.host;
    return this.http.get<Demande[]>(host+"/Demande?Status=false");
  }
  save(Demande:Demande):Observable<Demande>{
    let host=environment.host;
    return this.http.post<Demande>(host+"/Demande",Demande);
  }
}
