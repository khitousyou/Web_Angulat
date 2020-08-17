import { Component, OnInit } from '@angular/core';
import { ServiceAuthentificationService } from '../service-authentification.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(private _service:ServiceAuthentificationService) { }

  ngOnInit(): void {
  }
  
}
