import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Showroom } from '../models/AhmedKhnissi';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AhmedKhnissiServiceService {
  baseUrl='http://localhost:3000/Showroom'
  constructor(private http:HttpClient) { }
  addshowroom(show:Showroom):Observable<Showroom[]>{
    return this.http.post<Showroom[]>(this.baseUrl,show)
  }
  deleteshowroom(id:any):Observable<Showroom[]>{
    return this.http.delete<Showroom[]>(this.baseUrl+'/'+id)
  
  }
  getshowromm():Observable<Showroom[]>{
    return this.http.get<Showroom[]>(this.baseUrl)
  
  }
  updateshowroom(id:any,appart:Showroom):Observable<Showroom[]>{
    return this.http.put<Showroom[]>(this.baseUrl +'/'+id,appart)
  
  }
  
  getbyidshowroom(id:any):Observable<Showroom[]>{
    return this.http.get<Showroom[]>(this.baseUrl+'/'+id)
  
  }
}
