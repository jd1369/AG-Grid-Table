import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BaseService {
//  private apiUrl="https://www.googleapis.com/youtube/v3/search?key=AIzaSyDOFT_B081aEZScosfTYMruJobmpjqNeEk&maxResults=50&type=video&part=snippet&q=john "
//  private apiKey="AIzaSyDjHlWXLABjZGBpyNWing1TdLbMBT1cxdA"

 private apiUrl="assets/data.json"
  constructor( private http : HttpClient) { }

  /// Tried to access the given API but didnt work so doing it with JSON//////////////////

  getData(){
    return this.http.get(this.apiUrl)
  }

  
  // getData(): Observable<any> {
  //   // Set up headers with the API key
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Authorization': `Bearer ${this.apiKey}`,
  //   });

  //   // Make the HTTP GET request with headers
  //   return this.http.get(`${this.apiUrl}/endpoint`, { headers });
  // }
}
