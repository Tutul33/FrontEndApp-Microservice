import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ItemComponent } from './item/item.component';
import { ItemCategoryComponent } from './item-category/item-category.component';
import { InventoryRoutingModule } from './inventory-routing.module';

@NgModule({
  declarations: [
    ItemComponent,
    ItemCategoryComponent
  ],
  imports: [
    CommonModule,
    InventoryRoutingModule
  ]
})
export class InventoryModule { }
