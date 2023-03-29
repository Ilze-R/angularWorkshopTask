import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { MainMenuComponent } from './main-menu/main-menu.component';

import { NewPostModule } from './new-post/new-post.module';

@NgModule({
  declarations: [AppComponent, NotFoundComponentComponent, MainMenuComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    NewPostModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
