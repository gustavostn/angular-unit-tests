import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LikeWidgetComponent } from './shared/components/like-widget/like-widget.component';

const routes: Routes = [
  {    
    path: "", 
    component: LikeWidgetComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
