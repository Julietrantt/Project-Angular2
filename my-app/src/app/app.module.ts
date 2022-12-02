import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { PostsComponent } from './components/posts/posts.component';
import { CommentsComponent } from './components/comments/comments.component';
import { CommentsService } from './services/comments.service';
import { PostsService } from './services/posts.service';
import { UsersService } from './services/users.service';
import { HttpClientModule } from '@angular/common/http';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { CommentSectionComponent } from './components/comment-section/comment-section.component';



@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    PostsComponent,
    CommentsComponent,
    PostDetailComponent,
    CommentSectionComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
