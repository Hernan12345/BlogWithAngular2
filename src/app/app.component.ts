import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES }  from '@angular/router';
import { HTTP_PROVIDERS }  from '@angular/http';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { PostService } from './posts.service';
import 'rxjs/Rx';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ MainMenuComponent, ROUTER_DIRECTIVES ],
  providers: [ PostService, HTTP_PROVIDERS ]
})

export class AppComponent {
  title = 'app works!';
}
