import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as e from 'express';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(protected http: HttpClient) {}
  getbloghome(text:string,slug:string){
    let url=`${environment.apiUrl}/${environment.getbloghome}`;
    if(slug!=''){
      url=`${environment.apiUrl}/${environment.getbloghome}?slug=${slug}`;
    }
    if(text!=''){
      if(slug!=''){
        url=`${environment.apiUrl}/${environment.getbloghome}?slug=${slug}&text=${text}`;
      }
      else{
        url=`${environment.apiUrl}/${environment.getbloghome}?text=${text}`;
      }
    }
    return this.http.get<any>(url).pipe();

  }
}
