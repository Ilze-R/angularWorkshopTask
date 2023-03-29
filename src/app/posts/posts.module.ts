import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { FilterPostsComponent } from './filter-posts/filter-posts.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PostsComponent } from './posts.component';
import { DetailedPostComponent } from './detailed-post/detailed-post.component';

@NgModule({
  declarations: [FilterPostsComponent, PostsComponent, DetailedPostComponent],
  imports: [CommonModule, PostsRoutingModule, ReactiveFormsModule],
})
export class PostsModule {}
