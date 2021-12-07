import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectComponent } from './project.component';

const routes: Routes = [
  {
    path: '', component: ProjectComponent, children: [
      {
        path: '', loadChildren: () =>
          import('./home/home.module').then((m) => m.HomeModule)
      },
      {
        path:'agency', loadChildren:() => import('./agency/agency.module').then((m) => m.AgencyModule)
      }
      
    ]
  },
  


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
