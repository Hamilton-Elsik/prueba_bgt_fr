import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddComponent } from './add.component';
import { DebugElement } from '@angular/core';
import { DashboardItemsModule } from '../../dashboard-items.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { ProductsService } from '../../../core/services/products/products.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

describe('AddComponent', () => {
  let component: AddComponent;
  let fixture: ComponentFixture<AddComponent>;
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

    fixture = TestBed.createComponent(AddComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
