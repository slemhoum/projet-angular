import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {map, Observable} from "rxjs";

import {Service} from "../model/Service.model";

@Injectable({providedIn:"root"})
export class ServicesService{
  constructor(private http:HttpClient ) {
  }
  getAllService():Observable<Service[]>{
    let host=environment.host;
    return this.http.get<Service[]>(host+"/Service");
  }


  save(Service:Service):Observable<Service>{
    let host=environment.host;
    return this.http.post<Service>(host+"/Service",Service);
  }

  deleteData(id:number){
    let host=environment.host;
    return this.http.delete<any>(host+"/Service/"+id).pipe(map((res:any)=>{
      return res;
    }))
  }

  updateData(data:any,id:number){
    return this.http.put<any>("http://localhost:3000/Service/"+id,data).pipe(map((res:any)=>{
      return res;
    }))
  }
}
