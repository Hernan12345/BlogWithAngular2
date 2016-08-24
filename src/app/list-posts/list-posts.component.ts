import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ROUTER_DIRECTIVES }  from '@angular/router';
import 'rxjs/Rx';
import { PostService } from './../posts.service';
import { Post } from './../post';
import { DomSanitizationService } from '@angular/platform-browser';

@Component({
  moduleId: module.id,
  selector: 'app-list-posts',
  templateUrl: 'list-posts.component.html',
  styleUrls: ['list-posts.component.css'],
  directives: [ ROUTER_DIRECTIVES ]
})
export class ListPostsComponent implements OnInit {
    pageTitle: string = 'Posts List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string = '';
    errorMessage: string;
    posts: Post[];
    dangerousVideoUrl:string;



    constructor(
        private _postService: PostService,
        private _router: Router,
        private _sanitizer: DomSanitizationService

        ) {}

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
           this.getPost();
    }

    getPost():void {
        var posts = [];
           this._postService.getPosts()
           .subscribe(
                posts => this.posts = posts,
                error =>  this.errorMessage = <any>error);
    }

    updateVideoUrl(id: string) {
        this.dangerousVideoUrl = 'https://www.youtube.com/embed/' + id;
        return this._sanitizer.bypassSecurityTrustResourceUrl(this.dangerousVideoUrl);
    }
    
    selectDetail(post) {
        this._router.navigate(['/post', post._id]);
    }

    toDeletePost(post) {
        this._postService.deletePost(post._id).subscribe(
            () => this.getPost()
        );
    }

}
