import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidemenuItemComponent } from './sidemenu-item.component';
import { DebugElement } from '@angular/core';
import { LayoutsModule } from '../../layouts.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('SidemenuItemComponent', () => {
  let component: SidemenuItemComponent;
  let fixture: ComponentFixture<SidemenuItemComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutsModule, NoopAnimationsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(SidemenuItemComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
