import { Component, OnInit, Directive } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgClass, NgStyle } from '@angular/common';
import { UPLOAD_DIRECTIVES } from 'ng2-uploader/ng2-uploader';
import { Router, ActivatedRoute } from '@angular/router';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { PostService } from './../posts.service';
import { Post } from '../post';


@Component({
  moduleId: module.id,
  selector: 'app-addpost',
  templateUrl: 'addpost.component.html',
  styleUrls: ['addpost.component.css'],
  directives: [UPLOAD_DIRECTIVES],
})


export class AddpostComponent implements OnInit {
  
  uploadFile: any;
  options: Object = {
    url: './app/images/'
  };

  submitted = false;
  post : Post;
  constructor(
    private router: Router,
    private http: Http,
    public _postService : PostService
  ) {}


  ngOnInit() {
     this.post = new Post();
  }


  onSubmit(post:Post):void {
     this._postService.savePost(post).subscribe(()=> this._postService.goTo('posts'));
  }

  handleUpload(data): void {
    if (data && data.response) {
      data = JSON.parse(data.response);
      this.uploadFile = data;
    }
  }

}

