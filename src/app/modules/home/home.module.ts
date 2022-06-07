import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { IndexComponent } from './index/index.component';
import { SharedModule } from 'src/app/shared/shared.module';

import { PrimengModule } from 'src/app/primeng/primeng.module';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    IndexComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    PrimengModule
  ]
})
export class HomeModule { }
