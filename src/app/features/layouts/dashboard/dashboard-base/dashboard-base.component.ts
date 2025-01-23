import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  inject,
  Input,
  ViewChild,
} from '@angular/core';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { DashboardSidemenuService } from '../../../../core/services/dashboard/dashboard-sidemenu.service';

@Component({
  selector: 'app-dashboard-base',
  standalone: false,
  templateUrl: './dashboard-base.component.html',
  styleUrl: './dashboard-base.component.scss',
})
export class DashboardBaseComponent implements AfterViewInit {
  @Input() imageCollapsed?: string;
  @Input() imageExpanded?: string;

  @ViewChild('sidenav') protected sideNav!: MatSidenav;

  private sideMenuManager: DashboardSidemenuService = inject(
    DashboardSidemenuService
  );

  ngAfterViewInit(): void {
    this.sideMenuManager.registerSideNav(this.sideNav);
  }

  toggle() {
    this.sideMenuManager.toogle();
  }
}
