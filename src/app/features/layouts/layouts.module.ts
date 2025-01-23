import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DashboardBaseComponent } from './dashboard/dashboard-base/dashboard-base.component';
import { DashboardSidemenuComponent } from './dashboard/dashboard-sidemenu/dashboard-sidemenu.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DashboardToolbarComponent } from './dashboard/dashboard-toolbar/dashboard-toolbar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SidemenuItemComponent } from './dashboard/sidemenu-item/sidemenu-item.component';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [
    DashboardBaseComponent,
    DashboardSidemenuComponent,
    DashboardToolbarComponent,
    SidemenuItemComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatMenuModule,
    MatSlideToggleModule,
    FormsModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTooltipModule,
  ],
  exports: [DashboardBaseComponent, SidemenuItemComponent],
})
export class LayoutsModule {}
