import { Component, OnInit } from '@angular/core';
import { ServiceCatalogueService } from '../service-catalogue.service';
import { convertActionBinding } from '@angular/compiler/src/compiler_util/expression_converter';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.scss']
})
export class AdminProductComponent implements OnInit {

  constructor(private _service:ServiceCatalogueService) { }

  ngOnInit(): void {
    this.GetProducts();
    this.GetCategories();
  }

  onJter()
  {
    this._mode=2;
  }
  Quiter()
  {
    this._mode=1;
  }
  prd;
  onSave(data)
  {
    console.log(data);
      let url = this._service._host+"/products"
      this._service.AddRessource(url,data).subscribe(
      data1=>{this.prd = data1;this._mode=1;},
      err=>{console.log("Err on nv creation")}
    )
  }
  _products;
  _mode=1;
  cats;
  public GetProducts()
  {
   this._service.getAllProducts().subscribe(
     data=>{
      let dataEmbeded = data['_embedded'];
      this._products = dataEmbeded['products'];

      
      },
     err=>{console.log("Erreur")},
     ()=>{console.log("")}
   )
  }
  _categores;
  GetCategories()
  {
    this._service.getAllCategories().subscribe(
      data=>{
        let dataEmb = data['_embedded'];
        this._categores = dataEmb['categories'];
        console.log(this._categores);
      }
    )
  }
  onDelete(a)
  {
    console.log(a);
    let cc = confirm("Est-que vous vraiement supprimer");
    if(!cc)return;
    this._service.DeleteRessource(a._links.self.href).subscribe(
      data=>{console.log("Bien Supprimer");this.GetProducts()},
      err=>{console.log("Erreur Delete")})
  }
  
}
