import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private p:PostService ){}

 // post = ["id","title","body","slug","parent"]

  Post : Post[] = [];

  ngOnInit(): void {
    this.p.getPost().subscribe((res )=>{
      console.log(res);
res = res.filter((el)=>{
return el.parent == ''
})
      this.Post = res
    })
  }
}
