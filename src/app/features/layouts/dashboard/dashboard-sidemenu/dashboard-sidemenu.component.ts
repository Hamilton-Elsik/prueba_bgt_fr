import { Component, inject, Input, OnInit } from '@angular/core';
import { ISidemenuItem } from '../../../../core/interfaces/sidemenu.interface';
import { DashboardSidemenuService } from '../../../../core/services/dashboard/dashboard-sidemenu.service';

@Component({
  selector: 'app-dashboard-sidemenu',
  standalone: false,
  templateUrl: './dashboard-sidemenu.component.html',
  styleUrl: './dashboard-sidemenu.component.scss',
})
export class DashboardSidemenuComponent implements OnInit {
  @Input() imageCollapsed?: string;
  @Input() imageExpanded?: string;

  hideMenu: boolean = false;
  menuItems: ISidemenuItem[] = [];

  private readonly sideMenuManager: DashboardSidemenuService = inject(
    DashboardSidemenuService
  );

  ngOnInit() {
    this.sideMenuManager.openedChange.subscribe((opened) => {
      this.hideMenu = !opened;
    });

    this.sideMenuManager.menuItemsChange.subscribe((items) => {
      this.menuItems = items;
    });
  }
}
