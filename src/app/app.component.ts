import { Component } from '@angular/core';
import { Post } from './post';
import { PostService } from './post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'raw-materials';

  constructor(private p:PostService ){}

  post = ["id","title","body"]

  Post : Post[] = [];

  ngOnInit(): void {
    this.p.getPost().subscribe((res )=>{
      this.Post = res
    })
  }
}
