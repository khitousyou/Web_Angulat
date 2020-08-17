import { Component, OnInit } from '@angular/core';
import { ServiceCatalogueService } from '../service-catalogue.service';

@Component({
  selector: 'app-admin-categorie',
  templateUrl: './admin-categorie.component.html',
  styleUrls: ['./admin-categorie.component.scss']
})
export class AdminCategorieComponent implements OnInit {

  constructor(private _service:ServiceCatalogueService) { }

  ngOnInit(): void {
    this.getAll();
  }
  _categories;
  getAll()
  {
    this._service.getAllCategories().subscribe(data=>{
  this._categories = data;
    },err=>{
      console.log(err);
    })
  }
  //delete
  OnDelete(cat)
  {
    let cc = confirm("Est-que vous vraiement supprimer");
    console.log(cat);
    if(!cc)return;
      this._service.DeleteRessource(cat._links.self.href).subscribe(
      data=>{console.log("Bien Supprimer");this.getAll()},
      err=>{console.log("Erreur Delete")})
    
  }
  //ajouter click
  mode='list';
  onAjouter(){
  this.mode ='1';
  }
  //savecate
  onSaveCate(data)
  {
     let url = this._service._host+"/categories"
     this._service.AddRessource(url,data).subscribe(
     data=>{console.log("bein fait");this.getAll();this.mode='list'}
   )
  }
  //edite
  onEditeCate(data)
  {
    //  let url = this._service._host+"/categories"
     this._service.PutRessource(this._currenteCategorie._links.self.href,data).subscribe(
     data=>{console.log("bein editer");this.getAll();this.mode='list'}
   )
  }
  //Edite
  _currenteCategorie;
  OnEdite(data)
  {
      this._service.getRessource(data._links.self.href).subscribe(
      data=>{this._currenteCategorie = data;console.log(this.mode='2',data)}
      ,err=>{console.log("wwwwwwwwww")}
    )
  }
}
