import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PostService } from './../posts.service';
import { Post } from './../post';

@Component({
  moduleId: module.id,
  selector: 'app-postdetail',
  templateUrl: 'postdetail.component.html',
  styleUrls: ['postdetail.component.css']
})

export class PostdetailComponent implements OnInit {
  post: Post;
  private sub: any;
  errorMessage:string;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: PostService){}

  ngOnInit():void  {
    this.sub = this.route.params.subscribe(params => {
       let id = params['id']; // (+) converts string 'id' to a number
       this.service.getPost(id).subscribe(post => {
         this.post = post 
        });
     });
  }
  ngOnDestroy(){
    this.sub.unsubscribe();
  }
}
