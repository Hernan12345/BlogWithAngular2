import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPostsComponent } from './list-posts/list-posts.component';
import { PostdetailComponent } from './postdetail/postdetail.component'


export const routes: Routes = [
  { path: '', redirectTo: '/posts',
    pathMatch: 'full'},
  { path: 'posts', component: ListPostsComponent },
  { path: 'post/:id', component: PostdetailComponent }
];


export const routing: ModuleWithProviders  = RouterModule.forRoot(routes);
