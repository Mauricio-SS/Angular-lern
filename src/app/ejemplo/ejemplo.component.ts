import { Component, OnInit } from '@angular/core';

class Alumno {
  
  nombre!: string;
  apellido!: string;
  esExcelente!: boolean;

  constructor(){
    this.nombre = this.nombre;
    this.apellido = this.apellido;
    this.esExcelente = this.esExcelente;
  }



}

@Component({
  selector: 'app-ejemplo',
  templateUrl: './ejemplo.component.html',
  styleUrls: ['./ejemplo.component.scss']
})
export class EjemploComponent implements OnInit {

 alumno: Alumno = new Alumno();

 listadoAlumnos : Array<Alumno> = new Array();

 AgregaAlumno(){

  this.listadoAlumnos.push({
    nombre : this.alumno.nombre,
    apellido : this.alumno.apellido,
    esExcelente : this.alumno.esExcelente
  })

  this.alumno.nombre = '';
  this.alumno.apellido = '';
  this.alumno.esExcelente = false;

  console.log(this.listadoAlumnos);

 }



  constructor() { }

  ngOnInit(): void {
  }

}
