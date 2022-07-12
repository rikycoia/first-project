import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  url : string = "http://localhost:4201/posts";




  getPost(){

    return this.http.get<Post[]>(this.url)
  }

  getPostBySlug(slug:string){
    return this.http.get<Post>(this.url + '?slug=' + slug)
  }

  getPostBySection(section:string){

    return this.http.get<Post>( this.url + '?parent='+ section )
  }

  saveData(topic: string, mistakes: string) {
    localStorage.setItem(topic, mistakes);
  }

  getData(topic: string) {
    return localStorage.getItem(topic)
  }

}
