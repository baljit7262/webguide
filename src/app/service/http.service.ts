
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StorageService } from './storage.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GlobalsX } from './globalsss';

@Injectable()
export class CustomHttpClient {
  config: any;
  BaseURL: string;
  PublicUrl: string;
  Token: string;
  User: any;
  loading: any;
  ImageUrl: any;
  constructor(private http: HttpClient, private storage: StorageService, private gl: GlobalsX) {
    let currentUser = this.storage.get("respMsg");
    this.User = currentUser;
    this.BaseURL = "http://dummy.restapiexample.com/api";


    if (currentUser != null)
      this.Token = currentUser['auth'];
  }

  createAuthorizationHeader() {
    let currentUser: any = this.storage.get("gtcomp");
    // if (currentUser != null)
    //   this.Token = currentUser['auth'];
    this.User = currentUser;
    var reqheaders = new HttpHeaders();
    //  headers.append('token', btoa(JSON.stringify(currentUser['user'])));
    reqheaders = reqheaders.append("AUTHORIZATION", "Bearer " + currentUser.password);
    reqheaders = reqheaders.append("Content-Type", "application/json;");
    // if (currentUser != null)
    //   reqheaders = reqheaders.append('Authorization', 'Bearer ' + currentUser['auth']);
    var reqHeader = { headers: reqheaders };
    // console.log("header", currentUser['auth'], reqHeader);
    return reqHeader;

  }

  get(url) {
    var self = this;
    let headers = {};
    headers = this.createAuthorizationHeader();
    return this.http.get(this.BaseURL + url, headers).pipe(map(res => self.handlerData(res)));
  }
  public postNonHeader(Url, data) {
    return this.http.post<any>(this.BaseURL + Url, data, {}).pipe(
      map((data) => {
        return data;
      })
    );
  }
  delete(url) {
    var self = this;
    let headers = {};
    headers = this.createAuthorizationHeader();
    return this.http.delete(this.BaseURL + url, headers).pipe(map(res => self.handlerData(res)));

  }
  post(url, data) {
    var self = this;
    let headers = {};
    headers = this.createAuthorizationHeader();
    return this.http.post(this.BaseURL + url, data, headers).pipe(map(res => self.handlerData(res)));

  }
  postWithoutHeader(url, data) {
    var self = this;
    return self.http.post(self.BaseURL + url, data, {}).pipe(map(res => self.handlerData(res)));

  }
  postfree(url, data) {
    var self = this;
    return self.http.post(self.BaseURL + url, data, {}).pipe(res => self.handlerData(res));

  }
  put(url, data) {
    var self = this;
    let headers = {};
    headers = this.createAuthorizationHeader();
    return this.http.put(this.BaseURL + url, data, headers).pipe(map(res => self.handlerData(res)));

  }
  private handleError(error: Response) {

    return Observable.throw({ requestStatus: 0, msg: "Server error", arr: [] });
  }

  private handlerData(error: any) {

    return error;
  }


}

