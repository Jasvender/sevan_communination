import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '', loadChildren: () => import('./project/project.module').then((m) => m.ProjectModule)
  },
  // {
  //   path:'agency', loadChildren:() => import('./project/agency/agency.module').then((m) => m.AgencyModule)
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
