import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RoutesNames } from '../../core/constants/routes-names';
import { IncomeGrossComponent } from './income-gross/income-gross.component';
import { StartComponent } from './start.component';
import {PersonalInformationComponent} from "./personal-information/personal-information.component";
import {SecondPillarComponent} from "./second-pillar/second-pillar.component";

const routes: Routes = [
  {
    path: ``,
    component: StartComponent,
    children: [
      {
        path: `${RoutesNames.PERSONAL_INFO}`,
        component: PersonalInformationComponent,
      },
      {
        path: `${RoutesNames.INCOME}`,
        component: IncomeGrossComponent,
      },
      {
        path: `${RoutesNames.SECOND_PILLAR}`,
        component: SecondPillarComponent,
      },
    ]
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StartRoutingModule{}
