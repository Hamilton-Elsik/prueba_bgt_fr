import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { ProductsComponent } from './products.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProductsService } from '../../core/services/products/products.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

jest.mock('../../core/services/products/products.service');

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;
  let debugElement: DebugElement;
  let mockProductsService: jest.Mocked<ProductsService>;

  beforeEach(async () => {
    const productsServiceMock = {
      getProducts: jest.fn(),
      deleteProduct: jest.fn(),
    };

    await TestBed.configureTestingModule({
      declarations: [ProductsComponent],
      imports: [
        HttpClientTestingModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        NoopAnimationsModule,
      ],
      providers: [{ provide: ProductsService, useValue: productsServiceMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    mockProductsService = TestBed.inject(
      ProductsService
    ) as jest.Mocked<ProductsService>;

    mockProductsService.getProducts.mockReturnValue(
      of([
        {
          id: 1,
          nameProduct: 'Producto 1',
          category: 'Categoría 1',
          price: 100,
          quantityStock: 10,
        },
        {
          id: 2,
          nameProduct: 'Producto 2',
          category: 'Categoría 2',
          price: 200,
          quantityStock: 20,
        },
      ])
    );

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should load products on init', () => {
    expect(mockProductsService.getProducts).toHaveBeenCalled();
    expect(component.dataSource.data.length).toBe(2);
  });

  it('should call addProducts() when the button is clicked', () => {
    jest.spyOn(component, 'addProducts');

    const button = debugElement.query(By.css('.buttonAdd'));
    button.nativeElement.click();

    expect(component.addProducts).toHaveBeenCalled();
  });

  it('should filter products based on input', () => {
    const input = debugElement.query(By.css('input[matInput]')).nativeElement;
    input.value = 'Producto 1';
    input.dispatchEvent(new Event('keyup'));

    fixture.detectChanges();

    expect(component.dataSource.filteredData.length).toBe(1);
    expect(component.dataSource.filteredData[0].nameProduct).toBe('Producto 1');
  });

  it('should call editProduct() when edit icon is clicked', () => {
    jest.spyOn(component, 'editProduct');

    const editButton = debugElement.query(
      By.css('.iconfile[style*="color: #8917cf"]')
    );
    editButton.nativeElement.click();

    expect(component.editProduct).toHaveBeenCalledWith(1);
  });

  it('should call deleteProduct() when delete icon is clicked', () => {
    jest.spyOn(component, 'deleteProduct');

    const deleteButton = debugElement.query(
      By.css('.iconfile[style*="color: #17cfb2"]')
    );
    deleteButton.nativeElement.click();

    expect(component.deleteProduct).toHaveBeenCalledWith(1);
  });

  it('should render table columns correctly', () => {
    const headerCells = debugElement.queryAll(By.css('th.mat-header-cell'));
    const expectedHeaders = [
      'Id',
      'Nombre del producto',
      'Categoría',
      'Precio',
      'Cantidad en stock',
      'Opciones',
    ];

    headerCells.forEach((cell, index) => {
      expect(cell.nativeElement.textContent.trim()).toBe(
        expectedHeaders[index]
      );
    });
  });
});
