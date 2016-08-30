import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef,  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { HttpModule }  from '@angular/http';
import { ListPostsComponent } from './list-posts/list-posts.component';
import { PostdetailComponent } from './postdetail/postdetail.component';
import { PostService } from './posts.service';
import { routing } from './app.routes';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  declarations: [
    AppComponent,
    ListPostsComponent,
    PostdetailComponent
  ],
  providers: [
    PostService
  ],
  bootstrap: [ AppComponent ]
})



export class AppModule {}
