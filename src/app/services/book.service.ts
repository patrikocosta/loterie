import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent } from '@angular/common/http';
import { Livre } from '../models/livre.model';
import { Observable, Subscription } from 'rxjs';
import { T } from '@angular/core/src/render3';

@Injectable()
export class BookService {

  baseUrl = "http://localhost:3000/livres";


  livres: Livre[];

  book: Livre;

  subscriptions: Subscription;

  livre: Livre = {
    id: 1,
    titre: 'La faim du service',
    auteur: 'rene service'
  }

  constructor(private http: HttpClient) { }


  public getLivre() {
    return this.livre;
  }

  public getLivres(): Observable<Livre[]> {
    return this.http.get<Livre[]>(this.baseUrl);
    //return this.livres;
  }

  public getLivreById(id): Observable<Livre> {
    return this.http.get<Livre>(`${this.baseUrl}/${id}`);
  }

  public create(livre): Observable<Livre> {
    return this.http.post<Livre>(`${this.baseUrl}`, livre);
  }


  public delete(item) {


    //this.http.delete<Livre>(`${this.baseUrl}`, options).subscribe();
  }

}
