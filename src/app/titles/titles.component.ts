import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-titles',
  templateUrl: './titles.component.html',
  styleUrls: ['./titles.component.scss']
})
export class TitlesComponent implements OnInit {

  nombre:string = 'Mau'
  apellido:string = 'Sandoval'


  persona:any = {
    nombre:'Sam',
    apellido : 'Lara'
  }

  correo: string = ''
  password: string = ''
  usuario: string = ''


  constructor() { }

  ngOnInit(): void {
  }

  Iniciar(){
    console.log(this.correo)
    console.log(this.password)
  }

  eventdblclick(evento: any){

    if(evento.key == 'Enter'){
      alert('Ingresando al sistema ' + this.correo + ' - ' + this.password)

    }
  }

  AsignaUsuario(){
    this.usuario = this.correo
  }

  StyleFocus(evento: any){

       console.log(evento);

       evento.srcElement.style.width = "500px";
  }

  bigImage(evento : any){
    evento.srcElement.style.width = "800px";
  }

  tinyImage(evento : any){
    evento.srcElement.style.width = "300px";
  }


}
