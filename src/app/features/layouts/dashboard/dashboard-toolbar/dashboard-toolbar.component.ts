import { Component, OnInit } from '@angular/core';
import { ToolbarConfig } from '../../../../core/interfaces/toolbar-congig.interface';
import { DashboardSidemenuService } from '../../../../core/services/dashboard/dashboard-sidemenu.service';
import { DashboardToolbarService } from '../../../../core/services/dashboard/dashboard-toolbar.service';

@Component({
  selector: 'app-dashboard-toolbar',
  standalone: false,
  templateUrl: './dashboard-toolbar.component.html',
  styleUrl: './dashboard-toolbar.component.scss',
})
export class DashboardToolbarComponent implements OnInit {
  configuration: ToolbarConfig;
  hideMenu: boolean;
  isDarkTheme: boolean;

  constructor(
    private sideMenuManager: DashboardSidemenuService,
    private toolbarManager: DashboardToolbarService
  ) {
    this.configuration = new ToolbarConfig();
    this.hideMenu = false;
    this.isDarkTheme = false;
  }

  ngOnInit(): void {
    this.sideMenuManager.openedChange.subscribe((opened) => {
      this.hideMenu = !opened;
    });

    this.toolbarManager.configChange.subscribe((config) => {
      this.configuration = config;
    });
  }

  showMenu() {
    this.sideMenuManager.toogle();
  }

  selectTheme() {}

  logoutClicked() {
    this.configuration.exitButtonClicked();
  }
}
