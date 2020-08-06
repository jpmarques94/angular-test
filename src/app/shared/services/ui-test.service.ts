import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UITestService {

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    const url = 'https://uitest.free.beeceptor.com/usernames';

    return this.http.get<any>(url);
  }
}
