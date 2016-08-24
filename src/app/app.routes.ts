import { provideRouter, RouterConfig } from '@angular/router';
import { ListPostsComponent } from './list-posts/list-posts.component';
import { ContactComponent } from './contact/contact.component';
import { PostdetailComponent } from './postdetail/postdetail.component'
import { AddpostComponent } from './addpost/addpost.component'

export const routes: RouterConfig = [
  { path: '', component: ListPostsComponent },
  { path: 'posts', component: ListPostsComponent },
  { path: 'post/:id', component: PostdetailComponent },
  { path: 'deletepost/:id', component: ListPostsComponent },
  { path: 'addpost', component: AddpostComponent },
  { path: 'contact', component: ContactComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
