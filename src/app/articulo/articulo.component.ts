import { Component, OnInit } from '@angular/core';

interface Articulo{
  nombre: string,
  descripcion: string, 
  precio: number
}

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.scss']
})
export class ArticuloComponent implements OnInit {

  articulos: Array<Articulo> = new Array<Articulo>();

  constructor() { }

  ngOnInit(): void {

    this.articulos.push(
      {
        nombre: 'tv',
        descripcion: 'smart tv 40 pulgadas',
        precio: 10000
      },
      {
        nombre: 'tablet',
        descripcion: 'Lenovo 32 GB de memoria 8GB de Ram',
        precio: 5000
      },
      {
        nombre: 'smart watch',
        descripcion: 'Xiaomi watch S1 active',
        precio: 3000
      }
    )
  }

}
