import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewPostRoutingModule } from './new-post-routing.module';
import { NewPostComponent } from './new-post.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: NewPostComponent }];

@NgModule({
  declarations: [NewPostComponent],
  imports: [CommonModule, RouterModule.forChild(routes), ReactiveFormsModule],
})
export class NewPostModule {}
