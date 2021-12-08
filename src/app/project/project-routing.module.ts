import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectComponent } from './project.component';

const routes: Routes = [
  {
    path: '', component: ProjectComponent, children: [
      // {
      //   path: 'home', loadChildren: () =>
      //     import('./home/home.module').then((m) => m.HomeModule)
      // },
      // {
      //   path: '', redirectTo: 'home', pathMatch: 'full'
      // },
      // {
      //   path: '**', redirectTo:'home'
      // },
      {
        path:'', loadChildren:() => 
          import('./agency/agency.module').then((m) => m.AgencyModule)
      }
      
    ]
  },
  


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
