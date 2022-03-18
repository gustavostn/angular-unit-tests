import { UniqueIdService } from './../../services/unique-id/unique-id.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LikeWidgetComponent } from './like-widget.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  declarations: [LikeWidgetComponent],
  providers: [UniqueIdService],
  exports: [LikeWidgetComponent]
})
export class LikeWidgetModule { }
