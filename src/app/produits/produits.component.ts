import { Component, OnInit } from '@angular/core';
import { ServiceCatalogueService } from '../service-catalogue.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.scss']
})
export class ProduitsComponent implements OnInit {

  _products;
  constructor(private _service:ServiceCatalogueService,private _router:ActivatedRoute,private _route:Router) 
  {

    this._route.events.subscribe(event=>{
      if(event instanceof NavigationEnd)
      {
        let url = atob(_router.snapshot.params.url);
        this.getProducts(url);
      }
    })
    //////////////////////////
    
   
  }


  ngOnInit(): void {

   
  }


  getProducts(url)
  {
      this._service.getRessource(url)
      .subscribe(data=>{
        this._products = data;
        console.log(this._products);
          },err=>{
            console.log(err);
          })
  }
 



}
