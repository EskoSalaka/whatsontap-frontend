import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment'
import { IBar } from '../models'

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl: string = environment.apiPath

  constructor(private http: HttpClient) {}

  getBars(): Observable<IBar[]> {
    return this.http.get<IBar[]>(`${this.baseUrl}/bars`)
  }
}
