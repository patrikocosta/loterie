import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewBookComponent } from './new-book/new-book.component';
import { NewAuthorComponent } from './new-author/new-author.component';
import { AdminComponent } from './admin/admin.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormErrorComponent } from '../shared/form-error/form-error.component';
import { SharedModule } from '../shared/shared.module';

const routesAdmin: Routes = [
  {
      path: '',
      component: AdminComponent,
      children: [{
          path: 'new-book',
          component: NewBookComponent
      },
      {
          path: 'new-author',
          component: NewAuthorComponent
      }
      ]

  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routesAdmin),
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [NewBookComponent, NewAuthorComponent, AdminComponent]

})
export class AdminModule { }
