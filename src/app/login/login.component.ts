import { Component, OnInit } from '@angular/core';
import { ServiceAuthentificationService } from '../service-authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _service:ServiceAuthentificationService,private _router:Router,
    private _service_au:ServiceAuthentificationService) { }

  ngOnInit(): void {
  
  }

  public _mode=0;
 public  onLogin(_data)
  {
    console.log(_data);
    this._service.login(_data).subscribe(
      _response=>{
        //console.log(_response);
        console.log(_response.headers.get('authorization'));
       let jwt = _response.headers.get('authorization')
       this._service.saveToken(jwt);
       //this._router.navigateByUrl("/navigation")
      },err=>{
        console.log('err ya khouya',err);this._mode = 2;
        
      }
      ,
      ()=>{this.getUser()
      }
    )
  }
  isAdmin()
  {
    return this._service.isAdmin();
  }

  isUser()
  {
    return this._service.isUser();
  }

  isAuthentification()
  {
    return this._service_au.isAuthentification();
  }
//crea un compte

onCreate()
{
   this._mode=1;
}
  //calculer assez complexe 
  //depend du back end
  //this._router.navigate([path]
  _users;
  oncreation(data)
  {
    let url = this._service._host+"/appUsers";
    this._service_au.addUsers(url,data).subscribe(
      data1=>{this._users=data1},
      err=>{console.log("Err on nv creation")}
    )
  }
  //get Users
  _AppUser;
  getUser()
  {
    this._service_au.GetUsers().subscribe(
      data=>{this._AppUser=data},
      err=>{console.log("Err appUsers")})
  }
}
