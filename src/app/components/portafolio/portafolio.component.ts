import { ProductosService } from './../../services/productos.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html'
})
export class PortafolioComponent {

  constructor(public _ps:ProductosService) { }
}
