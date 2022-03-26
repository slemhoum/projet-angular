import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {map, Observable} from "rxjs";

import {Acc} from "../model/Acc.model";

@Injectable({providedIn:"root"})
export class AccsService{
  constructor(private http:HttpClient ) {
  }
  getAllAcc():Observable<Acc[]>{
    let host=environment.host;
    return this.http.get<Acc[]>(host+"/Acc");
  }


  save(Acc:Acc):Observable<Acc>{
    let host=environment.host;
    return this.http.post<Acc>(host+"/Acc",Acc);
  }

  deleteData(id:number){
    let host=environment.host;
    return this.http.delete<any>(host+"/Acc/"+id).pipe(map((res:any)=>{
      return res;
    }))
  }

  updateData(data:any,id:number){
    return this.http.put<any>("http://localhost:3000/Acc/"+id,data).pipe(map((res:any)=>{
      return res;
    }))
  }
}
