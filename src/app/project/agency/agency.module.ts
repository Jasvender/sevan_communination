import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AgencyComponent } from './agency.component';
import { SwiperModule } from 'swiper/angular';

const routes: Routes = [
    {
      path: '', component: AgencyComponent
    }
  ];

  @NgModule({
    declarations: [
    ],
    imports: [
      CommonModule,
      SwiperModule,
      RouterModule.forChild(routes)
    ],
  })
  export class AgencyModule { }