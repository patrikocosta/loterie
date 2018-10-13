import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { AppRoutingModule } from '../app-routing.module';
import { BookStoreComponent } from './book-store/book-store.component';
import { Routes, RouterModule } from '@angular/router';
import { BookRoutingModule } from './book-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    BookRoutingModule
  ],
  declarations: [BookListComponent, BookDetailComponent, BookStoreComponent],
exports: [
  BookStoreComponent,
 [RouterModule]
]
})
export class BookModule { }


