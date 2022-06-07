import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'index', component: IndexComponent },
      { path: 'about', component: AboutComponent },
      { path: '**', redirectTo: 'index' }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
