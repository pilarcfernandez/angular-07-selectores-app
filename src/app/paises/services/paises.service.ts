import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaisSmall } from '../interfaces/paises.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  private _regiones: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  private _baseUrl: string = 'https://restcountries.eu/rest/v2'

  constructor(private http: HttpClient) { }

  get regiones(): string[] {
    return [...this._regiones];
  }

  getPaisesPorRegion(region: string): Observable<PaisSmall[]> {
    const url: string  = `${this._baseUrl}/region/${region}`
    return this.http.get<PaisSmall[]>(url);
  }
  
}
