import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class NavService {
  constructor(protected http: HttpClient) {}
  getAll(id:string){
    return this.http.get<any>(`${environment.apiUrl}/${environment.categoryGetAll}`).pipe();

  }
}
