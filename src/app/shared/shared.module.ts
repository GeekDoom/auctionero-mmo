import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PrimengModule } from '../primeng/primeng.module';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    MenuComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PrimengModule,
  ],
  exports: [
    MenuComponent,
    FooterComponent

  ]
})
export class SharedModule { }
