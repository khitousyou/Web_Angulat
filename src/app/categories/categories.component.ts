import { Component, OnInit } from '@angular/core';
import { ServiceCatalogueService } from '../service-catalogue.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  constructor(private _service:ServiceCatalogueService,private _router:Router) { }

  _categories;
  _currentcategorie;
  ngOnInit(): void {  
   this.getAll();
  }
  
  //api rest full 
  getAll()
  {
    this._service.getAllCategories().subscribe(data=>{
  this._categories = data;
    },err=>{
      console.log(err);
    })
  }
  //Methode get 
  onGetProduct(_getProduct)
  {
      let jj= this._currentcategorie = _getProduct;
      console.log("CurrectActive_khitous"+jj._links.self.href);
      let url = _getProduct._links.products.href;
      console.log(url);
      this._router.navigateByUrl("/products/"+btoa(url));
  }
  onGestion(path='')
  {
    if('gestion')
    {
      path = 'gestion'
    }
    else{
      console.log("Err sytx")
    }
    this._router.navigate([path]);
  }
}
