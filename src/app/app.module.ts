import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FeatureRoutingModule } from './app.routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { AboutComponent } from './components/about/about.component';
import { PortafolioItemComponent } from './components/portafolio-item/portafolio-item.component';

import { InformacionService } from './services/informacion.service';
import { ProductosService } from './services/productos.service';

import { HttpModule } from '@angular/http';
import { SearchComponent } from './components/search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortafolioComponent,
    AboutComponent,
    PortafolioItemComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FeatureRoutingModule,
    HttpModule
  ],
  providers: [InformacionService, ProductosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
