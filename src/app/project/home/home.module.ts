import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { SwiperModule } from 'swiper/angular';
const routes: Routes = [
  {
    path: '', component: HomeComponent
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
  // exports: [
  //   WorksComponent
  // ],
})
export class HomeModule { }
