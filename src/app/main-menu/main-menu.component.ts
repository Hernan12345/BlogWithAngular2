import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES }  from '@angular/router';
import { ListPostsComponent } from './../list-posts/list-posts.component';

@Component({
  moduleId: module.id,
  selector: 'app-main-menu',
  templateUrl: 'main-menu.component.html',
  styleUrls: ['main-menu.component.css'],
  directives: [ ROUTER_DIRECTIVES ]
})
export class MainMenuComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
