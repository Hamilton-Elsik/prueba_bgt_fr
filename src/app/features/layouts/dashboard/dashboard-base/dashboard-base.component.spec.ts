import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardBaseComponent } from './dashboard-base.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LayoutsModule } from '../../layouts.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

describe('DashboardBaseComponent', () => {
  let component: DashboardBaseComponent;
  let fixture: ComponentFixture<DashboardBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatSidenavModule,
        MatToolbarModule,
        NoopAnimationsModule,
        LayoutsModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render mat-drawer-container', () => {
    const drawerContainer = fixture.debugElement.nativeElement.querySelector(
      'mat-drawer-container'
    );
    expect(drawerContainer).toBeTruthy();
  });

  it('should render mat-drawer', () => {
    const drawer =
      fixture.debugElement.nativeElement.querySelector('mat-drawer');
    expect(drawer).toBeTruthy();
  });

  it('should render mat-drawer-content', () => {
    const drawerContent =
      fixture.debugElement.nativeElement.querySelector('mat-drawer-content');
    expect(drawerContent).toBeTruthy();
  });
});
