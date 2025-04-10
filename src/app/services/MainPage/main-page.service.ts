import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from '../constants/constant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainPageService {

  constructor(private http:HttpClient) { }

  // GetSources():Observable<any>{
  //   return this.http.post(Constant.API_END_POINT+Constant.METHODS.GetSources_B2C,
  //     obj,{
  //       // headers: { 'Content-Type': 'application/json','verifyCall':'sdfgdffdfgdfgggggf' }
  //       headers: new HttpHeaders({
  //         'Content-Type': 'application/json',
  //         'verifyCall': '13e97b6dab764fbaac842bdd0a2d99a425635421723152065458'
  //       })
  //     }
  //   );
  // }
  GetSources():Observable<any>{
    return this.http.get(Constant.API_END_POINT+Constant.METHODS.GetSources_B2C);
  }
}
