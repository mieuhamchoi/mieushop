import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './components/catalog/catalog/catalog.component';
import { HomeComponent } from './components/home/home.component';
import { LearnTailwindComponent } from './components/learn-tailwind/learn-tailwind.component';
import { LearnAngularComponent } from './components/learnAngular/learnAngular.component';
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
  { path: 'learnangular', component: LearnAngularComponent },
  { path: 'learntailwind', component: LearnTailwindComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
