import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as e from 'express';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(protected http: HttpClient) {}
  getbloghome(pageNum:number,text:string,slug:string){
    let url=`${environment.apiUrl}/${environment.getbloghome}?pageNum=${pageNum}`;
    if(slug!=''){
      url=`${url}&slug=${slug}`;
    }
    if(text!=''){
      if(slug!=''){
        url=`${url}&text=${text}`;
      }
      else{
        url=`${url}&text=${text}`;
      }
    }
    return this.http.get<any>(url).pipe();

  }
}
