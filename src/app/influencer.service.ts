import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Influencer } from './influencer';

@Injectable({
  providedIn: 'root'
})
export class InfluencerService {

  private baseURL = "http://localhost:8080/api/v1/influencers"

  constructor(private httpClient: HttpClient) { }

  getInfluencersList(): Observable<Influencer[]>{
    return this.httpClient.get<Influencer[]>(this.baseURL);

  }

  createInfluencer(influencer: Influencer): Observable<Object>{
    return this.httpClient.post('${this.baseURL}', influencer);
  }


}
