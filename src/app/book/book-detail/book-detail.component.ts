import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { ActivatedRoute } from '@angular/router';
import { Livre } from '../../models/livre.model';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  constructor(private bookService: BookService, private route: ActivatedRoute) { }


  livredetail: Livre;

  id: number;
  private sub: any;

  subscriptions: Subscription;

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number

      this.subscriptions = this.bookService.getLivreById(this.id)
        .subscribe(livre => {
          this.livredetail = livre;
        });

    });
  }

  supprimerLivre(id) {

    console.log("IN: supprimerLivre() supprimer le livre; ID=", id);



  }



}
