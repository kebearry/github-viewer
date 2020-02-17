import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Import Containers
import { DefaultLayoutComponent } from './containers/default-layout/default-layout.component';
//Import Views
import { ErrorComponent } from './views/error/error.component';

export const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: '',
        loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule)
      }
    ]
  },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }