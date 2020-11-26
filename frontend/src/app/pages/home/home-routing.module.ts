import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeDesktopComponent } from './home-desktop/home-desktop.component';
import { RoutesNames } from '../../core/constants/routes-names';

const routes: Routes = [
  {
    path: `ch-en/home`,
    component: HomeDesktopComponent,
  },
  {
    path: '',
    redirectTo: `ch-en/home`,
    pathMatch: 'full',
  },
  {
    path: `ch-en/${RoutesNames.CALCUlATED}`,
    component: HomeDesktopComponent,
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule{}
