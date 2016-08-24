"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var router_2 = require('@angular/router');
require('rxjs/Rx');
var posts_service_1 = require('./../posts.service');
var platform_browser_1 = require('@angular/platform-browser');
var ListPostsComponent = (function () {
    function ListPostsComponent(_postService, _router, _sanitizer) {
        this._postService = _postService;
        this._router = _router;
        this._sanitizer = _sanitizer;
        this.pageTitle = 'Posts List';
        this.imageWidth = 50;
        this.imageMargin = 2;
        this.showImage = false;
        this.listFilter = '';
    }
    ListPostsComponent.prototype.toggleImage = function () {
        this.showImage = !this.showImage;
    };
    ListPostsComponent.prototype.ngOnInit = function () {
        this.getPost();
    };
    ListPostsComponent.prototype.getPost = function () {
        var _this = this;
        var posts = [];
        this._postService.getPosts()
            .subscribe(function (posts) { return _this.posts = posts; }, function (error) { return _this.errorMessage = error; });
    };
    ListPostsComponent.prototype.updateVideoUrl = function (id) {
        this.dangerousVideoUrl = 'https://www.youtube.com/embed/' + id;
        return this._sanitizer.bypassSecurityTrustResourceUrl(this.dangerousVideoUrl);
    };
    ListPostsComponent.prototype.selectDetail = function (post) {
        this._router.navigate(['/post', post._id]);
    };
    ListPostsComponent.prototype.toDeletePost = function (post) {
        var _this = this;
        this._postService.deletePost(post._id).subscribe(function () { return _this.getPost(); });
    };
    ListPostsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-list-posts',
            templateUrl: 'list-posts.component.html',
            styleUrls: ['list-posts.component.css'],
            directives: [router_2.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [posts_service_1.PostService, router_1.Router, platform_browser_1.DomSanitizationService])
    ], ListPostsComponent);
    return ListPostsComponent;
}());
exports.ListPostsComponent = ListPostsComponent;
//# sourceMappingURL=../../tmp/broccoli_type_script_compiler-input_base_path-UEtcAAFD.tmp/0/src/app/list-posts/list-posts.component.js.map