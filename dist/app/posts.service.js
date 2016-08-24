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
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
var Observable_1 = require('rxjs/Observable');
require('rxjs/Rx');
var PostService = (function () {
    function PostService(_http, _router) {
        this._http = _http;
        this._router = _router;
        this._baseUrl = 'http://localhost:3000';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    PostService.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    ;
    PostService.prototype.getPosts = function () {
        var posts = [];
        return this._http.get(this._baseUrl + '/posts')
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    PostService.prototype.getPost = function (id) {
        return this.getPosts()
            .map(function (posts) { return posts.find(function (post) { return post._id === id; }); });
    };
    PostService.prototype.savePost = function (post) {
        var body = JSON.stringify(post);
        var options = new http_1.RequestOptions({ headers: this.headers });
        return this._http.post(this._baseUrl + '/addpost', body, options)
            .map(this.extractData, this.getPosts)
            .catch(this.handleError);
    };
    PostService.prototype.deletePost = function (id) {
        var options = new http_1.RequestOptions({ headers: this.headers });
        return this._http.delete(this._baseUrl + '/deletepost/' + id, options)
            .map(function () { return console.log('Registro Borrado'); })
            .catch(this.handleError);
    };
    PostService.prototype.goTo = function (url) {
        this._router.navigate(['/' + url]);
    };
    PostService.prototype.handleError = function (error) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    PostService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, router_1.Router])
    ], PostService);
    return PostService;
}());
exports.PostService = PostService;
//# sourceMappingURL=../tmp/broccoli_type_script_compiler-input_base_path-UEtcAAFD.tmp/0/src/app/posts.service.js.map