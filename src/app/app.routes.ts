import { Routes } from '@angular/router';
import { DashboardComponent } from './features/layouts/dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: DashboardComponent,
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./features/dashboard-items.module').then(
                (m) => m.DashboardItemsModule
              ),
          },
        ],
      },
      {
        path: '**',
        redirectTo: '',
      },
    ],
  },
];
