import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LayoutModule } from '../layout/layout.module';
import { ProjectComponent } from './project.component';
import { ProjectRoutingModule } from './project-routing.module';
import { SharedModule } from '../shared/shared.module';
import { SwiperModule } from 'swiper/angular';
import { WorksComponent } from './components/works/works.component';
import { NgxMasonryModule } from 'ngx-masonry';
import { NgwWowModule } from 'ngx-wow';
import { ContactComponent } from './components/contact/contact.component';
import { AgencyComponent } from './agency/agency.component';






@NgModule({
  declarations: [
    HomeComponent,
    ProjectComponent,
    WorksComponent,
    ContactComponent,
    AgencyComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    SharedModule,
    SwiperModule,
    NgxMasonryModule,
    NgwWowModule,
    ProjectRoutingModule
  ],
  exports: [
    WorksComponent,
    ContactComponent
  ]
})
export class ProjectModule { }
