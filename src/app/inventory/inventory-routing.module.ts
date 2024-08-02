import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ItemComponent } from './item/item.component';
import { ItemCategoryComponent } from './item-category/item-category.component';


const routes:Routes= [
  { path: 'item', component: ItemComponent },
  { path: 'item-category', component: ItemCategoryComponent }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
