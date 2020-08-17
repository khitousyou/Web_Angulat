import { Component, OnInit } from '@angular/core';
import { ServiceAuthentificationService } from './service-authentification.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'api-rest-jwt';

  _roles:Array<string>;
  constructor( private _service_au:ServiceAuthentificationService)
   {
     
    //  console.log("les Rolesss a khitous ="+this._roles);
    
   }
  ngOnInit(): void {
    
  }
  isAuthentification()
  {
    return this._service_au.isAuthentification();
  }
 
}
