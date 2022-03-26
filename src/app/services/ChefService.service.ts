import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {map, Observable} from "rxjs";

import {ChefService} from "../model/ChefService.model";

@Injectable({providedIn:"root"})
export class ChefServicesService{
  constructor(private http:HttpClient ) {
  }
  getAllChefService():Observable<ChefService[]>{
    let host=environment.host;
    return this.http.get<ChefService[]>(host+"/ChefService");
  }


  save(ChefService:ChefService):Observable<ChefService>{
    let host=environment.host;
    return this.http.post<ChefService>(host+"/ChefService",ChefService);
  }

  deleteData(id:number){
    let host=environment.host;
    return this.http.delete<any>(host+"/ChefService/"+id).pipe(map((res:any)=>{
      return res;
    }))
  }

  updateData(data:any,id:number){
    return this.http.put<any>("http://localhost:3000/ChefService/"+id,data).pipe(map((res:any)=>{
      return res;
    }))
  }
}
