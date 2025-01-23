import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Router } from '@angular/router';
import { ProductsComponent } from './features/products/products.component';
import { RouterTestingModule } from '@angular/router/testing';
import { DashboardItemsModule } from './features/dashboard-items.module';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        DashboardItemsModule,
        RouterTestingModule.withRoutes([
          { path: '', component: ProductsComponent },
        ]),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    router = TestBed.inject(Router);
    router.initialNavigation(); // Inicializa la navegación
  });

  it('should render ProductsComponent when navigating to "/"', () => {
    router.navigate(['']).then(() => {
      fixture.detectChanges();
    });
  });
});
