import { Component, } from '@angular/core';
import { PersonnesService } from './personnes.service';

@Component({
    selector:'app-personnes-input',
    templateUrl: './personnes-input.component.html',
    styleUrls: ['./personnes-input.component.css']
})

export class personnesInputComponent {


    enteredPersonneName = '';

    constructor(private personneService: PersonnesService){

    }

    OnCreatePersonne() {
        this.personneService.addPersonne(this.enteredPersonneName)
        this.enteredPersonneName = '';
    }
}