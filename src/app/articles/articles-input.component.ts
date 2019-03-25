import { Component, } from '@angular/core';
import { ArticlesService } from './articles.service';

@Component({
    selector: 'app-articles-input',
    templateUrl: './articles-input.component.html',
    styleUrls: ['./articles-input.component.css']
})

export class ArticlesInputComponent {

    enteredArticleName = '';

    constructor(private articleService: ArticlesService){

    }

    onCreateArticle() {
        this.articleService.addArticle(this.enteredArticleName);
        this.enteredArticleName = '';
    }
}