import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Post } from './post';

@Injectable()

export class PostService {
    private _baseUrl = 'http://localhost:3000';
    private extractData(res: Response) {
        let body = res.json();
        return body.data || { };
    }
    public posts:Post[];

    constructor(private _http: Http, private _router:Router ) { };
    private headers = new Headers({'Content-Type': 'application/json'});

    getPosts() {
        var posts = [];
        return this._http.get(this._baseUrl+'/posts')
            .map((response: Response) => <Post[]> response.json())
            .catch(this.handleError)
    }

    getPost(id: string): Observable<Post> {
        return this.getPosts()
            .map((posts:Post[]) => posts.find(post => post.id === id))
            
    }


    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
