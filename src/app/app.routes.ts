import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home').then(m => m.Home)
  },
  {
    path: 'projects/stayhub',
    loadComponent: () => import('./features/projects/pages/stayhub/stayhub').then(m => m.Stayhub)
  },
  {
    path: 'projects/rtm-automation',
    loadComponent: () => import('./features/projects/pages/rtm-automation/rtm-automation').then(m => m.RtmAutomation)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
