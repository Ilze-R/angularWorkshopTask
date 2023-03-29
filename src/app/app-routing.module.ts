import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/posts' },
  {
    path: 'posts',
    loadChildren: () =>
      import('./posts/posts.module').then((m) => m.PostsModule),
  },
  {
    path: 'new-post',
    loadChildren: () =>
      import('./new-post/new-post.module').then((m) => m.NewPostModule),
  },
  {
    path: '**',
    // component: PostsComponent,
    redirectTo: '/posts',
  },
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
