import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticlesComponent } from './articles/articles.component';
import { ArticlesInputComponent } from './articles/articles-input.component';
import { personnesInputComponent } from './personnes/personnes-input.component';
import { PersonnesComponent } from './personnes/personnes.component';

const routes: Routes = [
    { path: "", component: ArticlesComponent },
    { path: "article-input", component: ArticlesInputComponent },
    { path: "personnes", component: PersonnesComponent },
    { path: "personne-input", component: personnesInputComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

export class AppRoutingModule{}