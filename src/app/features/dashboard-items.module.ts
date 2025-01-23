import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { imports } from '../shared/imports/imports';
import { ProductsComponent } from './products/products.component';
import { AddComponent } from './products/add/add.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { DeleteComponent } from './products/delete/delete.component';
import { EditComponent } from './products/edit/edit.component';

const routes: Routes = [{ path: '', component: ProductsComponent }];

@NgModule({
  declarations: [
    ProductsComponent,
    AddComponent,
    DeleteComponent,
    EditComponent,
  ],

  imports: [
    RouterModule.forChild(routes),
    imports,
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' }),
  ],
  exports: [ProductsComponent],
})
export class DashboardItemsModule {}
