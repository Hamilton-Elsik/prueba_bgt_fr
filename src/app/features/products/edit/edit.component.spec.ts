import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditComponent } from './edit.component';
import { DebugElement } from '@angular/core';
import { DashboardItemsModule } from '../../dashboard-items.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ProductsService } from '../../../core/services/products/products.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrModule, ToastrService } from 'ngx-toastr';

describe('EditComponent', () => {
  let component: EditComponent;
  let fixture: ComponentFixture<EditComponent>;
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

    fixture = TestBed.createComponent(EditComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
