import { Component, OnInit } from '@angular/core';
import { Post } from './../post';

@Component({
  moduleId: module.id,
  selector: 'app-contact',
  templateUrl: 'contact.component.html',
  styleUrls: ['contact.component.css']
})
export class ContactComponent implements OnInit {
    pageTitle: string = 'Post Detail';
    post: Post;
    errorMessage: string;
  
  constructor() {}

  ngOnInit() {
    
  }

}

