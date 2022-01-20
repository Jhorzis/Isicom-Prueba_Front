import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.routing';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductoGenericoComponent } from './ProductoGenerico/ProductoGenerico.component';
import { ProdGenComponent } from './prod-gen/prod-gen.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductoGenericoComponent,
    ProdGenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
