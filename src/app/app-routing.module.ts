import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './components/catalog/catalog/catalog.component';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product/product.component';
import { PageNotFoundComponent } from './components/shared/components/page-not-found/page-not-found.component';

const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent,
    children: [
      { 
        path: 'catalog/:catalogId', 
        component: CatalogComponent 
      },
      { 
        path: 'product/:productId', 
        component: ProductComponent 
      },
    ] 
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
