import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
const Material=[MatDividerModule,MatListModule,MatIconModule,MatSidenavModule,MatToolbarModule,MatMenuModule,MatButtonModule,MatGridListModule]

@NgModule({
  // declarations: [],
  imports: [CommonModule,Material],
  exports:[Material]
})
export class MaterialModule { }
