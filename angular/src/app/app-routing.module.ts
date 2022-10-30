import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MaineLayoutComponent} from "./layouts/maine-layout/maine-layout.component";

const routes: Routes = [
  {path: '', component:MaineLayoutComponent, children:[
      {path:'users', loadChildren:()=>import('./modules/user/user.module').then(value => value.UserModule)},
      {path:'posts', loadChildren:()=>import('./modules/post/post.module').then(value => value.PostModule)},
      {path:'comments', loadChildren:()=>import('./modules/comment/comment.module').then(value => value.CommentModule)}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
