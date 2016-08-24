"use strict";
var router_1 = require('@angular/router');
var list_posts_component_1 = require('./list-posts/list-posts.component');
var contact_component_1 = require('./contact/contact.component');
var postdetail_component_1 = require('./postdetail/postdetail.component');
var addpost_component_1 = require('./addpost/addpost.component');
exports.routes = [
    { path: '', component: list_posts_component_1.ListPostsComponent },
    { path: 'posts', component: list_posts_component_1.ListPostsComponent },
    { path: 'post/:id', component: postdetail_component_1.PostdetailComponent },
    { path: 'deletepost/:id', component: list_posts_component_1.ListPostsComponent },
    { path: 'addpost', component: addpost_component_1.AddpostComponent },
    { path: 'contact', component: contact_component_1.ContactComponent }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=../tmp/broccoli_type_script_compiler-input_base_path-UEtcAAFD.tmp/0/src/app/app.routes.js.map