import { Component } from "@angular/core";

@Component({
    selector : 'app-heroe',
    templateUrl : 'heroe.component.html'
})
export default class HeroeComponent {
    public title : string = 'Componente Heroe';

    nombre : string = 'Ironman';
    edad : number = 45;

    get nombreCapitalizado():string{
        return this.nombre.toUpperCase();
    }

    obtenerNomrbe(): string {
        return `${this.nombre} - ${this.edad}`;
    }

    cambiarNombre():void {
        this.nombre = 'Spiderman';
        
    }

    cambiarEdad():void {
        this.edad = 22;
    }
}