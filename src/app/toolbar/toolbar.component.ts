import { Component, OnInit } from '@angular/core';
import { ServiceAuthentificationService } from '../service-authentification.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(private _service:ServiceAuthentificationService) { }

  ngOnInit(): void {
  }

  isAdmin()
  {
    return this._service.isAdmin();
  }

  isUser()
  {
    return this._service.isUser();
  }

  // public getRol()
  // {
  //   return this._roles = this._service.getRoles();
  // }
   

  

 public  isAuthentification()
 {
  return this._service.isAuthentification();
 }

 public logout()
 {
   this._service.logout();
 }
}
