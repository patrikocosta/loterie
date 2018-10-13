import { Component, OnInit } from '@angular/core';
import { Livre } from '../../models/livre.model';
import { FormsModule } from '@angular/forms';
import { BookService } from '../../services/book.service';
import { Auteur } from '../../models/auteur.model';
import { Subscription } from 'rxjs';
import { AuteurService } from '../../services/auteur.service';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent implements OnInit {

  constructor(private bookService: BookService, private auteurService: AuteurService) { }

  livre = new Livre();

  auteurs: Auteur[];

  subscriptions: Subscription;

  ngOnInit() {
        this.subscriptions = this.auteurService.getAuteurs()
          .subscribe(auteurs => {
            this.auteurs = auteurs;
          });
  }

  onSubmit() {
    return this.bookService.create(this.livre).subscribe();
  }

}
