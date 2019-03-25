import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
    providedIn: "root"
})


export class PersonnesService {
  personneChanged = new Subject<string[]>();
  personnes: string[];

  constructor(private http: HttpClient) {

  }


  fetchPersonnes() {
    this.http.get<any>('http://localhost:3000/api/v1/personnes')
    .pipe(map(resData => {
      return resData.map(personne => personne);
    }))
    .subscribe(transformedData => {
        this.personneChanged.next(transformedData);
    });
  }






  addPersonne(name: string){
    this.personnes.push(name);
    this.personneChanged.next(this.personnes);
  }




  deletePersonne(name: string){
    this.personnes = this.personnes.filter(personne => {
      return personne !== name;
    })
    this.personneChanged.next(this.personnes);
  }
}