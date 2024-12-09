import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HinzufuegenPage } from './hinzufuegen.page';

const routes: Routes = [
  {
    path: '',
    component: HinzufuegenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HinzufuegenPageRoutingModule {}
