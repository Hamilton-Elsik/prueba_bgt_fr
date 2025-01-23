import { Component, Input, SimpleChanges } from '@angular/core';
import {
  ExtendedSideMenuItem,
  ISidemenuItem,
} from '../../../../core/interfaces/sidemenu.interface';
import { NavigationEnd, Router } from '@angular/router';
import { DashboardSidemenuService } from '../../../../core/services/dashboard/dashboard-sidemenu.service';
import { ISidemenuItemOptions } from '../../../../core/interfaces/sideitems.interface';

@Component({
  selector: 'app-sidemenu-item',
  standalone: false,
  templateUrl: './sidemenu-item.component.html',
  styleUrl: './sidemenu-item.component.scss',
})
export class SidemenuItemComponent {
  @Input() config?: ISidemenuItem;
  @Input() collapsed: boolean;

  _config: ExtendedSideMenuItem;

  constructor(
    private readonly router: Router,
    private readonly sideMenuManager: DashboardSidemenuService
  ) {
    this.collapsed = false;
    this._config = new ExtendedSideMenuItem();
  }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateMenuSelectors(this.router.url);
      }
    });

    this.updateMenuSelectors(this.router.url);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['config']) {
      this._config = new ExtendedSideMenuItem(changes['config'].currentValue);
    }
  }

  updateMenuSelectors(currentUrl: string) {
    if (this._config.hasOptions) {
      this._config.options = this._config.options.map((x) => {
        x.isSelected = x.url ? currentUrl.startsWith(x.url ?? '') : false;
        return x;
      });

      this._config.isSelected = this._config.options.some((x) => x.isSelected);
    } else {
      this._config.isSelected = currentUrl.startsWith(this._config.url ?? '');
    }
  }

  isActiveItem(itemUrl: string) {
    return itemUrl;
  }

  optionClicked(item: ISidemenuItemOptions) {
    this.sideMenuManager.menuItemPressed.next(item);
  }
}
