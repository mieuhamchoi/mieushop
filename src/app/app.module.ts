import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
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
//ng bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import '@angular/localize/init';
// pipes
import { FormatVndPipe } from './components/shared/pipes/formatVnd/format-vnd.pipe';
// call api
import { HttpClientModule } from '@angular/common/http';
import { CatalogComponent } from './components/catalog/catalog/catalog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PageNotFoundComponent,
    FormatVndPipe,
    CatalogComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
