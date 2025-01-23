import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ISidemenuItem } from '../../interfaces/sidemenu.interface';
import { BehaviorSubject, Subject } from 'rxjs';
import { ISidemenuItemOptions } from '../../interfaces/sideitems.interface';
import { BreakpointObserver } from '@angular/cdk/layout';

const DEFAULT_COLLAPSED = true;

@Injectable({
  providedIn: 'root',
})
export class DashboardSidemenuService {
  private sideNav!: MatSidenav;
  private isSmallPage: boolean;
  private isCollapsed: boolean;

  private menuItems: ISidemenuItem[];

  menuItemPressed: Subject<ISidemenuItemOptions>;
  openedChange: BehaviorSubject<boolean>;
  menuItemsChange: BehaviorSubject<ISidemenuItem[]>;

  get isOpened(): boolean {
    if (this.isSmallPage) return this.sideNav?.opened ?? false;

    return !this.isCollapsed;
  }

  constructor(private readonly breakpointObserver: BreakpointObserver) {
    this.isCollapsed = false;
    this.isSmallPage = false;
    this.menuItems = [];

    this.menuItemPressed = new Subject<ISidemenuItemOptions>();
    this.openedChange = new BehaviorSubject<boolean>(false);
    this.menuItemsChange = new BehaviorSubject<ISidemenuItem[]>([]);

    this.breakpointObserver
      .observe(['(max-width: 599.9px)'])

      .subscribe((state) => {
        this.isSmallPage = state.matches;
        this.updateSizeFeatures(true);
      });
  }

  private updateSizeFeatures(openWithDefaultCollapsed: boolean = false): void {
    if (!this.sideNav) return;

    if (this.isSmallPage) {
      this.sideNav.mode = 'over';
      this.close();
    } else {
      this.sideNav.mode = 'side';
      openWithDefaultCollapsed ? this.open(DEFAULT_COLLAPSED) : this.open();
    }
  }

  registerSideNav(sideNav: MatSidenav): void {
    this.sideNav = sideNav;

    this.sideNav.openedChange.subscribe(() => {
      this.openedChange.next(this.isOpened);
    });

    setTimeout(() => {
      this.updateSizeFeatures(true);
    });
  }

  open(collapsed: boolean = false): void {
    this.sideNav?.open();
    if (!this.isSmallPage) {
      this.isCollapsed = collapsed;
    }

    this.openedChange.next(this.isOpened);
  }

  close(): void {
    if (!this.isSmallPage) {
      this.isCollapsed = true;
      this.openedChange.next(this.isOpened);
    } else {
      this.sideNav?.close();
    }
  }

  toogle(): void {
    this.isOpened ? this.close() : this.open();
  }

  getMenuItems(): ISidemenuItem[] {
    return this.menuItems;
  }

  setMenuItems(items: ISidemenuItem[]): void {
    this.menuItems = items;
    this.menuItemsChange.next(this.menuItems);
  }
}
