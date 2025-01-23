import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSidemenuComponent } from './dashboard-sidemenu.component';
import { LayoutsModule } from '../../layouts.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DebugElement } from '@angular/core';

describe('DashboardSidemenuComponent', () => {
  let component: DashboardSidemenuComponent;
  let fixture: ComponentFixture<DashboardSidemenuComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutsModule, NoopAnimationsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardSidemenuComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
