import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SwiperModule } from 'swiper/angular';
import { BlogComponent } from './blog.component';

const routes: Routes = [
    {
      path: '', component: BlogComponent
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
  export class BlogModule { }