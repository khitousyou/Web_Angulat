import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from "@auth0/angular-jwt";
@Injectable({
  providedIn: 'root'
})
export class ServiceAuthentificationService {

  constructor(private _http:HttpClient) { }

  public  _host:string = "http://localhost:8086";
  public  _jwt:string;
  private _username:string;
  private _roles:Array<string>;

  public login(data)
  {
    //donnes moi toutes la repose http
    return this._http.post(this._host+"/login",data,{observe:'response'});
  }

  public GetUsers()
  {
     let _header = new HttpHeaders({'authorization':'Bearer'+this._jwt});
     return this._http.get(this._host+"/appUsers",{headers:_header});
  }

  public addUsers(url,data)
  {
     let _header = new HttpHeaders({'authorization':'Bearer'+this._jwt});
     return this._http.post(url,data,{headers:_header});
  }

  public saveToken(_jwt:string)
  {
    //enregister dans local storage 
     localStorage.setItem('token',_jwt);
     this._jwt = _jwt;
     this.parseJWT();
  }

  public parseJWT()
  {
    let _jwtHelper = new JwtHelperService();
    let _jwtobject = _jwtHelper.decodeToken(this._jwt);
    this._username = _jwtobject.obj;
    this._roles    = _jwtobject.roles;
    console.log("Les roles = "+this._roles);
    console.log("admin="+this.isAdmin());
    console.log("user="+this.isUser());
  }
  
  public getRoles()
  {
    return this._roles;
  }
  
  isAdmin() {
    return this._roles.indexOf('ADMIN') >= 0;
  }

  isUser() {
    return this._roles.indexOf('USER') >= 0;
  }

  public isAuthentification()
  {
    // return this._roles && (this.isAdmin()||this.isUser())
    return this._roles != undefined;
  }

  
 public logout()
 {
   localStorage.removeItem('token');
   this.initParam();
 }

public initParam()
{
  this._jwt      = undefined;
  this._username = undefined;
  this._roles    = undefined;
}

}
