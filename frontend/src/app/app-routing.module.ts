import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutesNames } from './core/constants/routes-names';
import { HomeDesktopComponent } from './pages/home-desktop/home-desktop.component';
import { TermsComponent } from './pages/terms/terms.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { KeenComponent } from './pages/keen/keen.component';

const routes: Routes = [
  {
    path: `:language/${RoutesNames.HOME}`,
    component: HomeDesktopComponent,
  },
  {
    path: '',
    redirectTo: `ch-en/home`,
    pathMatch: 'full',
  },
  {
    path: `ch-en/${RoutesNames.TERMS}`,
    component: TermsComponent,
  },
  {
    path: `ch-en/${RoutesNames.PRIVACY_POLICY}`,
    component: PrivacyPolicyComponent,
  },
  {
    path: `:language/${RoutesNames.KEEN}`,
    component: KeenComponent,
  },
  {
    path: '**',
    redirectTo: RoutesNames.NOT_FOUND,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
