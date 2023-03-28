import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { PostListsComponent } from './post-lists/post-lists.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'posts', component: PostListsComponent },
  { path: 'new-post', loadChildren: () => import('./new-post/new-post.module').then(m => m.NewPostModule) },
  { path: '**', component: NotFoundComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
