import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebcallService {

  constructor(private httpclient: HttpClient) { }

  getData(): Observable<any>  {
    return this.httpclient.get('/services/catalog/v4/category/shop/new/all-new/index.json');
  }

}
