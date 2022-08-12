import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  personajes : Personaje[] = [
    {
      nombre : 'Goku',
      poder : 1500
    },
    {
      nombre : 'Vegeta',
      poder : 7500
    }
  ]
    
  nuevo:Personaje= {
    nombre: '',
    poder: 0
  }

  agregarNuevoPersonaje( argumento : Personaje ){
    console.log(argumento);
    this.personajes.push(argumento);
  }


}
