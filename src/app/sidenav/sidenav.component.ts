import { Component, OnInit } from '@angular/core';
import { ServiceAuthentificationService } from '../service-authentification.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor( private _service_au:ServiceAuthentificationService) { }

  ngOnInit(): void {
  }
  isAuthentification()
  {
    return this._service_au.isAuthentification();
  }

}
