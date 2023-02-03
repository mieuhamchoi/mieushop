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
import {MatAutocompleteModule} from '@angular/material/autocomplete'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    MatAutocompleteModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
