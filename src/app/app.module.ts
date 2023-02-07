import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// angular form
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // dùng để các thứ liên quan tới form

// routing
import { AppRoutingModule } from './app-routing.module';
// compoent app
import { AppComponent } from './app.component';

// component create
import { HeaderComponent } from './components/shared/components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/shared/components/page-not-found/page-not-found.component';

//angular material
import {MatInputModule} from '@angular/material/input'
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

//ng bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import '@angular/localize/init';
// pipes
import { FormatVndPipe } from './components/shared/pipes/formatVnd/format-vnd.pipe';
// call api
import { HttpClientModule } from '@angular/common/http';
import { CatalogComponent } from './components/catalog/catalog/catalog.component';
import { ProductComponent } from './components/product/product/product.component';
//ngx-bootstrap
import { TooltipModule } from 'ngx-bootstrap/tooltip';
// mdb bootsrap
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PageNotFoundComponent,
    FormatVndPipe,
    CatalogComponent,
    ProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    MatAutocompleteModule,
    BrowserAnimationsModule,
    NgbModule,
    MatButtonModule,
    HttpClientModule,
    MatTableModule,
    TooltipModule.forRoot(),
    MdbCheckboxModule,
    MdbFormsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
