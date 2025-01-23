import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProductsService } from '../../../core/services/products/products.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-delete',
  standalone: false,
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.scss',
})
export class DeleteComponent {
  constructor(
    private _dialogRef: MatDialogRef<DeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private productsService: ProductsService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService
  ) {}
  deleteProduct() {
    this.spinner.show();
    this.productsService.deleteProduct(this.data).subscribe(
      (data) => {
        this.spinner.hide();
        this.toastr.success(data.message);
        this.close();
      },
      (error) => {
        this.spinner.hide();
        console.log(error);
        const errorMessage = this.extractInterpolatedMessage(error.error);

        if (errorMessage) {
          this.toastr.error(errorMessage);
        } else {
          this.toastr.error('Error al eliminar el producto');
        }
      }
    );
  }
  close() {
    this._dialogRef.close(true);
  }

  extractInterpolatedMessage(errorResponse: string): string | null {
    const regex = /interpolatedMessage='([^']+)'/;
    const match = errorResponse.match(regex);

    return match ? match[1] : null;
  }
}
