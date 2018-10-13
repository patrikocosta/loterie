import { Component, OnInit, Output, EventEmitter, Input, OnChanges, OnDestroy } from '@angular/core';
import { Livre } from '../../models/livre.model';
import { BookService } from '../../services/book.service';
import { Subscription } from 'rxjs';






@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit, OnDestroy {

  livres: Livre[];
  subscriptions: Subscription;


  constructor(private bookService: BookService) { }

  ngOnInit() {

    this.subscriptions = this.bookService.getLivres()
      .subscribe(livres => {
        this.livres = livres;
      }, err => {
        console.error(err);
      });


  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }


}
