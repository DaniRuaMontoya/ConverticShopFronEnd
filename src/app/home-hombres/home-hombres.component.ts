import { Component, OnInit } from '@angular/core';
import { Producto } from '../model/producto-model';
import { ProductoService } from '../service/producto.service';

@Component({
  selector: 'app-home-hombres',
  templateUrl: './home-hombres.component.html',
  styleUrls: ['./home-hombres.component.css']
})

export class HomeHombresComponent implements OnInit {

  productos!:Producto[];

  constructor(private productosServicio: ProductoService){
    
  }



  ngOnInit(): void {
    this.productosServicio.obtenerProductos(1) .subscribe({
      next:(value:Producto[])=>this.productos=value
    })
  }

}
