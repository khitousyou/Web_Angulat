import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProduitsComponent } from './produits/produits.component';
import { LoginComponent } from './login/login.component';
import { CategoriesComponent } from './categories/categories.component';
import { GestionComponent } from './gestion/gestion.component';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { AdminCategorieComponent } from './admin-categorie/admin-categorie.component';
import { AdminProductComponent } from './admin-product/admin-product.component';
import { NestJsComponent } from './nest-js/nest-js.component';



const routes: Routes = [
  
  //  {path:"",component:CategoriesComponent},
   {path:"products/:url",component:ProduitsComponent},
   {path:"login",component:LoginComponent},
   {path:"gestion",component:GestionComponent},
   {path:"cat",component:CategoriesComponent},
   {path:"admin-cat",component:AdminCategorieComponent},
   {path:"admin-prd",component:AdminProductComponent},
   {path:"admin-user",component:AdminUserComponent}
   ,
   {path:"Nest",component:NestJsComponent}
  
   
  // {path:"navigation",component:NavigationComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
