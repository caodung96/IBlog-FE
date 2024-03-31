import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  constructor(protected http: HttpClient) {}
  getblogbyslug(slug:string){
    return this.http.get<any>(`${environment.apiUrl}/${environment.getblogbyslug}?slug=${slug}`).pipe();

  }
}
