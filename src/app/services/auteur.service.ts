import { Injectable } from '@angular/core';
import { Auteur } from '../models/auteur.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class AuteurService {

  baseUrl = "http://localhost:3000/auteur";


  constructor(private http: HttpClient) { }


  public create(auteur): Observable<Auteur> {
    return this.http.post<Auteur>(`${this.baseUrl}`, auteur);
  }


  public getAuteurs(): Observable<Auteur[]> {
    return this.http.get<Auteur[]>(this.baseUrl);
  }

}
