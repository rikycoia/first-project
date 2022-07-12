import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/post';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {

  constructor(private post:PostService , private route:ActivatedRoute)  { }
page!:any


Post: Post[]  = [];
singlePost!: Post[]

  ngOnInit(): void {


    this.route.params.subscribe((res:any)=>{

     if (!res.slug){
         this.post.getPostBySection(res.url).subscribe((res:any)=>{

          this.Post = res


         })
       }else{
        this.post.getPostBySlug(res.slug).subscribe((res:any)=>{
          this.singlePost = res
        })
       }
    })
  }
}
