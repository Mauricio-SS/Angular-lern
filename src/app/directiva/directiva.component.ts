import { Component, OnInit } from '@angular/core';

interface producto {

  nombre : string, 
  stock : number,
  distribuidor : string,
  caducidad: Date
}

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.scss']
})
export class DirectivaComponent implements OnInit {

  cargando : boolean = true; 

  productos : Array<producto> = [
    {
      nombre: 'Gansito',
      stock: 1,
      distribuidor: 'Marinela',
      caducidad: new Date('08/09/2025')
    },
    {
      nombre: 'Emperador',
      stock: 12,
      distribuidor: 'Gamesa',
      caducidad: new Date('08/09/2025')
    },
    {
      nombre: 'Oikos',
      stock: 3,
      distribuidor: 'Alpura',
      caducidad: new Date('08/09/2025')
    },
  ]
  
  tab : string = '';
  modo : boolean = false;

  constructor() { }

  ngOnInit(): void {

    setTimeout(() => {
      this.cargando = false;
    }, 5000);

  }

  cambiaTab( tab : string ) {
    this.tab = tab;
  }

  cambiaModo(){
    this.modo = !this.modo;
  }

}
