import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ServiceAuthentificationService } from './service-authentification.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceCatalogueService {

  public _nest:string = "http://localhost:3000";
  public GetAll(){
    return this._http.get(this._nest+"/dao");
  }
  public addNest(data)
  {
    return this._http.post(this._nest+"/dao",data);
  }

  public _host:string ="http://localhost:9090";
  constructor(private _http:HttpClient,private _Service_au:ServiceAuthentificationService) { }


 public getAllCategories()
  {
    return this._http.get(this._host+"/categories")
  }

  public getAllProducts()
  {
    return this._http.get(this._host+"/products")
  }

 public getRessource(url)
  {
     return this._http.get(url);
  }

  public DeleteRessource(url)
  {
    let _header = new HttpHeaders({'authorization':'Bearer'+this._Service_au._jwt});
     return this._http.delete(url,{headers:_header});
  }

  public AddRessource(url,data)
  {
     let _header = new HttpHeaders({'authorization':'Bearer'+this._Service_au._jwt});
     return this._http.post(url,data,{headers:_header});
  }

  public PutRessource(url,data)
  {
    let _header = new HttpHeaders({'authorization':'Bearer'+this._Service_au._jwt});
     return this._http.patch(url,data,{headers:_header});
  }

  
}
