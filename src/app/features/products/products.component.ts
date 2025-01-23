import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { ProductsService } from '../../core/services/products/products.service';
import { MatTableDataSource } from '@angular/material/table';
import { Products } from '../../core/models/products/products.model';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  displayedColumns: string[] = [
    'id',
    'nameProduct',
    'category',
    'price',
    'quantityStock',
    'option',
  ];
  dataSource = new MatTableDataSource<Products>();
  constructor(
    private _liveAnnouncer: LiveAnnouncer,
    private dialog: MatDialog,
    private productsService: ProductsService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  addProducts() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.maxHeight = '92vh';
    dialogConfig.maxWidth = '92vw';
    dialogConfig.disableClose = true;
    const dialogRef = this.dialog.open(AddComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((x) => {
      setTimeout(() => {
        this.getData();
      }, 500);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  editProduct(id: string) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.maxHeight = '92vh';
    dialogConfig.maxWidth = '92vw';
    dialogConfig.disableClose = true;
    dialogConfig.data = id;
    const dialogRef = this.dialog.open(EditComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((x) => {
      setTimeout(() => {
        this.getData();
      }, 500);
    });
  }

  deleteProduct(id: string) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.maxHeight = '92vh';
    dialogConfig.maxWidth = '92vw';
    dialogConfig.disableClose = true;
    dialogConfig.data = id;
    const dialogRef = this.dialog.open(DeleteComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((x) => {
      setTimeout(() => {
        this.getData();
      }, 500);
    });
  }

  getData() {
    this.spinner.show();
    this.productsService.getProducts().subscribe(
      (data) => {
        this.dataSource = new MatTableDataSource<Products>(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.spinner.hide();
      },
      (error) => {
        this.spinner.hide();
      }
    );
  }
}
