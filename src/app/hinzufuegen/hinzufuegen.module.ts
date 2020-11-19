import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HinzufuegenPageRoutingModule } from './hinzufuegen-routing.module';

import { HinzufuegenPage } from './hinzufuegen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HinzufuegenPageRoutingModule
  ],
  declarations: [HinzufuegenPage]
})
export class HinzufuegenPageModule {}
