import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoeschbedeutungPage } from './loeschbedeutung.page';

const routes: Routes = [
  {
    path: '',
    component: LoeschbedeutungPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoeschbedeutungPageRoutingModule {}
