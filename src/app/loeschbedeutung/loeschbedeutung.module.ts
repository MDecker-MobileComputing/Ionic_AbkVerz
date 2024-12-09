import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoeschbedeutungPageRoutingModule } from './loeschbedeutung-routing.module';

import { LoeschbedeutungPage } from './loeschbedeutung.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoeschbedeutungPageRoutingModule
  ],
  declarations: [LoeschbedeutungPage]
})
export class LoeschbedeutungPageModule {}
