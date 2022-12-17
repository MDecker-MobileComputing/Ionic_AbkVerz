import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'hinzufuegen',
    loadChildren: () => import('./hinzufuegen/hinzufuegen.module').then( m => m.HinzufuegenPageModule)
  },
  {
    path: 'hilfe',
    loadChildren: () => import('./hilfe/hilfe.module').then( m => m.HilfePageModule)
  },
  {
    path: 'liste',
    loadChildren: () => import('./liste/liste.module').then( m => m.ListePageModule)
  },
  {
    path: 'loeschbedeutung',
    loadChildren: () => import('./loeschbedeutung/loeschbedeutung.module').then( m => m.LoeschbedeutungPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
