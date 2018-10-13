
import { Routes, RouterModule } from '@angular/router';
import { BookStoreComponent } from './book-store/book-store.component';
import { NgModule } from '@angular/core';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';


export const routesBook: Routes = [
    {
        path: 'books',
        component: BookStoreComponent,
        children: [ {
            path: ':id',
            component: BookDetailComponent
        },
        {
            path: '',
            component: BookListComponent
        }
    ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routesBook)],
    exports: [RouterModule],
})
export class BookRoutingModule { }