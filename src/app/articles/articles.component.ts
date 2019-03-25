import { Component, OnInit, OnDestroy } from '@angular/core';
import { ArticlesService } from './articles.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-articles',
    templateUrl: './articles.component.html'
})

export class ArticlesComponent implements OnInit, OnDestroy {
   articleList: string[];
   isFetching = false;
   private articleListSubs: Subscription;

   constructor(private artclService: ArticlesService) {

   }
   ngOnInit() {
    this.articleListSubs = this.artclService.articleChanged.subscribe(articles => {
        this.articleList = articles;
        this.isFetching = false;
    });
    this.isFetching = true;
    this.artclService.fetchArticles();
   }

   onDeleteArticle(articleName: string){
    this.artclService.deleteArticle(articleName);
   }

   ngOnDestroy() {
    this.articleListSubs.unsubscribe();
   }
}