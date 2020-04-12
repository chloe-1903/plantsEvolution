import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { UiComponent } from './components/ui/ui.component';
import {MatSidenavModule} from '@angular/material';



@NgModule({
  declarations: [NavComponent, HeaderComponent, FooterComponent, UiComponent],
  exports: [UiComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule
  ]
})
export class UiModule { }
