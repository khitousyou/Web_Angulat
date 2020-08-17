import { Component, OnInit } from '@angular/core';
import { ServiceCatalogueService } from '../service-catalogue.service';

@Component({
  selector: 'app-nest-js',
  templateUrl: './nest-js.component.html',
  styleUrls: ['./nest-js.component.scss']
})
export class NestJsComponent implements OnInit {

  constructor(private _service:ServiceCatalogueService) { }

  ngOnInit(): void {
    this. getAll();
  }

  Nest;
  getAll()
  {
    this._service.GetAll().subscribe(data=>{
  this.Nest = data;
    },err=>{
      console.log(err);
    })
  }

  //add
  tab;
  oncreation(data)
  {
      console.log(data);
      this._service.addNest(data).subscribe(
      data1=>{this.tab = data1;console.log(this.tab)},
      err=>{console.log("Err on nv creation")}
    )
  }
  
  
}
