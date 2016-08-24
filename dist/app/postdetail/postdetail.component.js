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
var posts_service_1 = require('./../posts.service');
var PostdetailComponent = (function () {
    function PostdetailComponent(route, router, service) {
        this.route = route;
        this.router = router;
        this.service = service;
    }
    PostdetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var id = params['id']; // (+) converts string 'id' to a number
            _this.service.getPost(id).subscribe(function (post) {
                _this.post = post;
            });
        });
    };
    PostdetailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    PostdetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-postdetail',
            templateUrl: 'postdetail.component.html',
            styleUrls: ['postdetail.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, posts_service_1.PostService])
    ], PostdetailComponent);
    return PostdetailComponent;
}());
exports.PostdetailComponent = PostdetailComponent;
//# sourceMappingURL=../../tmp/broccoli_type_script_compiler-input_base_path-UEtcAAFD.tmp/0/src/app/postdetail/postdetail.component.js.map