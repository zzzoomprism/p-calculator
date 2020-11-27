import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {StartComponent} from './start.component';
import {StartRoutingModule} from './start-routing.module';
import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import { TabsModule } from '../../shared/tabs/tabs.module';

@NgModule({
  declarations: [
    StartComponent,
  ],
  imports: [
    RouterModule,
    StartRoutingModule,
    PerfectScrollbarModule,
    TabsModule
  ],
  providers: [
  ],
  bootstrap: []
})
export class StartModule { }
