import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';


import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostsComponent } from './posts.component';

const routes: Routes = [

  { path: '',
    component: PostsComponent
  },

 {
  path: ':url',
  component: PostDetailComponent
 },
 {
  path: ':url/child/:slug',
  component: PostDetailComponent
 },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
