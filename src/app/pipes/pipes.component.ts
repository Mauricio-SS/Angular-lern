import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})

export class PipesComponent implements OnInit {

  lorem: string = 'Lorem ipsum dolor sit amet.'
  dinero : number = 2400 
  ganancias : number = 0.54
  fecha : Date = new Date('06-1-2019')

  textoLargo : string = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam praesentium aliquid assumenda architecto laborum omnis temporibus saepe dignissimos. Laboriosam earum quasi corporis voluptate odit dolores alias officiis id eius iusto'

  constructor() { }

  ngOnInit(): void {
  }

}
