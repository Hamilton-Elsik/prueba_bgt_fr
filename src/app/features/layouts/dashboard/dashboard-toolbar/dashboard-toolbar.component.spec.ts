import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardToolbarComponent } from './dashboard-toolbar.component';
import { DebugElement } from '@angular/core';
import { LayoutsModule } from '../../layouts.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

describe('DashboardToolbarComponent', () => {
  let component: DashboardToolbarComponent;
  let fixture: ComponentFixture<DashboardToolbarComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutsModule, NoopAnimationsModule, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardToolbarComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
