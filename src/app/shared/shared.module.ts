import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadlineComponent } from './components/headline/headline.component';
import { PreloaderComponent } from './components/preloader/preloader.component';



@NgModule({
  declarations: [
    HeadlineComponent,
    PreloaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeadlineComponent,
    PreloaderComponent
  ]
})
export class SharedModule { }
