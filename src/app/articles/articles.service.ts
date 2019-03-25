import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class ArticlesService {
    articleChanged = new Subject<string[]>();
    articles: string[];

    constructor(private http: HttpClient) {

    }

    fetchArticles() {
        this.http.get<any>('http://localhost:3000/api/v1/articles')
        .pipe(map(resData => {
            return resData.map(article => article);         
        }))
        .subscribe(transformedData => {
            this.articleChanged.next(transformedData);
        });
        
    }


    
    addArticle(name: string){
        this.articles.push(name);
        this.articleChanged.next(this.articles);
      }


    
    deleteArticle(name: string){
        this.articles = this.articles.filter(article => {
            return article !== name;
        });
        this.articleChanged.next(this.articles);
    }
}