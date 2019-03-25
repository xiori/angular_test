import { Component, OnInit, OnDestroy } from '@angular/core';
import { PersonnesService } from './personnes.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-personnes',
    templateUrl: './personnes.component.html'
})

export class PersonnesComponent implements OnInit, OnDestroy{
    personnesList: string[];
    private personneListSubs: Subscription;



    constructor(private personnesService: PersonnesService) {
        
    }


    ngOnInit(){
        this.personnesService.fetchPersonnes();
        this.personneListSubs = this.personnesService.personneChanged.subscribe(personnes => {
            this.personnesList = personnes;
        });  
    }

    onDeletePersonne(personneName: string){
        this.personnesService.deletePersonne(personneName);
    }

    ngOnDestroy(){
        this.personneListSubs.unsubscribe();
    }
}