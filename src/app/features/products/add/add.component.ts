import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../../../core/services/products/products.service';
import { MatDialogRef } from '@angular/material/dialog';
import { Products } from '../../../core/models/products/products.model';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { integerValidator } from '../../../shared/validator/validator';

@Component({
  selector: 'app-add',
  standalone: false,
  templateUrl: './add.component.html',
  styleUrl: './add.component.scss',
})
export class AddComponent implements OnInit {
  public addProduct!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private productsService: ProductsService,
    private _dialogRef: MatDialogRef<AddComponent>,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.addProduct = this.fb.group({
      nameProduct: ['', Validators.required],
      category: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(0)]],
      quantityStock: [
        0,
        [Validators.required, Validators.min(0), integerValidator()],
      ],
    });
  }
  saveProduct() {
    this.spinner.show();
    const productInsert: Products = {
      nameProduct: this.addProduct.value.nameProduct,
      category: this.addProduct.value.category,
      price: this.addProduct.value.price,
      quantityStock: this.addProduct.value.quantityStock,
    };
    this.productsService.saveProduct(productInsert).subscribe(
      (data) => {
        this.spinner.hide();
        this.toastr.success('Producto Guardado');
        this.close();
      },
      (error) => {
        this.spinner.hide();
        const errorMessage = this.extractInterpolatedMessage(error.error);

        if (errorMessage) {
          this.toastr.error(errorMessage);
        } else {
          this.toastr.error('Error al guardar el producto');
        }
      }
    );
  }
  close() {
    this._dialogRef.close(true);
  }

  isValidField(field: string): boolean | null {
    return (
      this.addProduct.controls[field].errors &&
      this.addProduct.controls[field].touched
    );
  }

  extractInterpolatedMessage(errorResponse: string): string | null {
    const regex = /interpolatedMessage='([^']+)'/;
    const match = errorResponse.match(regex);

    return match ? match[1] : null;
  }
}
