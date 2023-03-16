import { Component, Input } from '@angular/core';
import { Producto } from '../model/producto-model';



@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})


export class CardComponent {
  @Input() producto!: Producto;
  @Input() indice: number | undefined;

 
}
