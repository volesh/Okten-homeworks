import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import {HttpClientModule} from "@angular/common/http";
import { PostsComponent } from './components/posts/posts.component';
import { CommentsComponent } from './components/comments/comments.component';
import { PostComponent } from './components/post/post.component';
import { CommentComponent } from './components/comment/comment.component';
import {RouterModule, Routes} from "@angular/router";
import { HeaderComponent } from './components/header/header.component';
import { MaineLayoutComponent } from './layouts/maine-layout/maine-layout.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

const routes:Routes = [
  {
    path:'', component:MaineLayoutComponent, children:[
      {path:'', redirectTo:'users', pathMatch:'full'},
      {
        path:'users', component:UsersComponent, children:[
          {path:':id', component:UserDetailsComponent}
        ]
      },
      {path:'posts', component:PostsComponent},
      {path:'comments', component:CommentsComponent}
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    PostsComponent,
    CommentsComponent,
    PostComponent,
    CommentComponent,
    HeaderComponent,
    MaineLayoutComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
