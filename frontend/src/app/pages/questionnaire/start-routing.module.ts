import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RoutesNames } from '../../core/constants/routes-names';
import { PersonalLayoutComponent } from './personal-layout/personal-layout.component';
import { IncomeGrossComponent } from './income-gross/income-gross.component';
import { StartComponent } from './start.component';

const routes: Routes = [
  {
    path: ``,
    component: StartComponent,
    children: [
      {
        path: `${RoutesNames.PERSONAL_INFO}`,
        component: PersonalLayoutComponent,
      },
      {
        path: `${RoutesNames.INCOME}`,
        component: IncomeGrossComponent,
      },
    ]
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StartRoutingModule{}
