import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Producto } from "../model/producto-model";

@Injectable({
    providedIn: 'root'
})

export class ProductoService{

    constructor(private endPoint: HttpClient) {}

    obtenerProductos(genero: number): Observable<Producto[]> {
        //return this.endPoint.get<Producto[]>('http://localhost:8081/EcommerceApp/producto/genero/'+ genero);
        if(genero === 1){
            return of(this.productosHombres());
        } else{return of(this.productosMujeres())};
    
      }


    private productosHombres (){
        let productos: Producto[] = [];

        const producto1: Producto = {
            id: 1,
            nombre: "Boxer",
            descripcion: "Cómodo"
        };

        const producto2: Producto = {
            id: 2,
            nombre: "Camiseta",
            descripcion: "Comodidad"
        };

        const producto3: Producto = {
            id: 3,
            nombre: "BlueJean",
            descripcion: "Para todo tipo de hombre"
        };

        productos.push(producto1, producto2, producto3);

        return productos;
        
    }
    
    private productosMujeres (){
        let productos: Producto[] = [];

        const producto1: Producto = {
            id: 1,
            nombre: "Pantie",
            descripcion: "Cómodo"
        };

        const producto2: Producto = {
            id: 2,
            nombre: "Camiseta",
            descripcion: "Comodidad"
        };

        const producto3: Producto = {
            id: 3,
            nombre: "BlueJean",
            descripcion: "Para todo tipo de mujer"
        };

        productos.push(producto1, producto2, producto3);

        return productos;
        
    } 
}