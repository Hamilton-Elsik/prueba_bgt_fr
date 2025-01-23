import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../../../core/services/products/products.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { Products } from '../../../core/models/products/products.model';
import { integerValidator } from '../../../shared/validator/validator';

@Component({
  selector: 'app-edit',
  standalone: false,
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss',
})
export class EditComponent {
  public editProduct!: FormGroup;
  dataProduct!: Products;
  constructor(
    private fb: FormBuilder,
    private productsService: ProductsService,
    private _dialogRef: MatDialogRef<EditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.editProduct = this.fb.group({
      nameProduct: ['', Validators.required],
      category: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(0)]],
      quantityStock: [
        0,
        [Validators.required, Validators.min(0), integerValidator()],
      ],
    });
    this.getData();
  }
  saveProduct() {
    this.spinner.show();
    const productInsert: Products = {
      id: this.dataProduct.id,
      nameProduct: this.editProduct.value.nameProduct,
      category: this.editProduct.value.category,
      price: this.editProduct.value.price,
      quantityStock: this.editProduct.value.quantityStock,
    };
    this.productsService.editProduct(productInsert).subscribe(
      (data) => {
        this.spinner.hide();
        this.toastr.success('Producto Editado');
        this.close();
      },
      (error) => {
        this.spinner.hide();
        const errorMessage = this.extractInterpolatedMessage(error.error);

        if (errorMessage) {
          this.toastr.error(errorMessage);
        } else {
          this.toastr.error('Error al editar el producto');
        }
      }
    );
  }
  close() {
    this._dialogRef.close(true);
  }

  isValidField(field: string): boolean | null {
    return (
      this.editProduct.controls[field].errors &&
      this.editProduct.controls[field].touched
    );
  }

  extractInterpolatedMessage(errorResponse: string): string | null {
    const regex = /interpolatedMessage='([^']+)'/;
    const match = errorResponse.match(regex);

    return match ? match[1] : null;
  }

  getData() {
    this.spinner.show();
    this.productsService.getProductById(this.data).subscribe(
      (data) => {
        this.dataProduct = data;
        this.editProduct.setValue({
          nameProduct: data.nameProduct,
          category: data.category,
          price: data.price,
          quantityStock: data.quantityStock,
        });
        this.spinner.hide();
      },
      (error) => {
        this.spinner.hide();
      }
    );
  }
}
