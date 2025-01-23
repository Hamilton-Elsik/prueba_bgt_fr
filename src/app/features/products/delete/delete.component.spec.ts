import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteComponent } from './delete.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardItemsModule } from '../../dashboard-items.module';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { DebugElement } from '@angular/core';
import { ProductsService } from '../../../core/services/products/products.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

describe('DeleteComponent', () => {
  let component: DeleteComponent;
  let fixture: ComponentFixture<DeleteComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        DashboardItemsModule,
        NoopAnimationsModule,
        HttpClientModule,
        ToastrModule.forRoot(),
      ],
      providers: [
        ProductsService,
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} },
        ToastrService,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DeleteComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
