import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Router, RouterModule } from '@angular/router';

import { LayoutsModule } from '../layouts.module';
import { DashboardSidemenuService } from '../../../core/services/dashboard/dashboard-sidemenu.service';
import { DashboardToolbarService } from '../../../core/services/dashboard/dashboard-toolbar.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { MatIconModule } from '@angular/material/icon';
import { DashboardItemsModule } from '../../dashboard-items.module';
import { getMenuItems } from './menu-items';

@UntilDestroy()
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    LayoutsModule,
    MatIconModule,
    DashboardItemsModule,
  ],
  providers: [],
})
export class DashboardComponent implements OnInit {
  userFullname = '';
  role = '';

  private readonly sideMenuManager = inject(DashboardSidemenuService);
  private readonly toolbarManager = inject(DashboardToolbarService);
  private readonly router = inject(Router);

  async ngOnInit(): Promise<void> {
    this.toolbarManager.configuration = {
      title: '',
      exitButtonClicked: () => {
        this.router.navigateByUrl('/', { onSameUrlNavigation: 'reload' });
      },
    };

    this.sideMenuManager.setMenuItems(getMenuItems());

    this.sideMenuManager.menuItemPressed
      .pipe(untilDestroyed(this))
      .subscribe((item) => {
        this.router.navigate([`${item.url}`]);
      });
  }
}
