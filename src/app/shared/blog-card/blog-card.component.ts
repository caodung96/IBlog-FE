import { Component, Input } from '@angular/core';
import { Post } from 'src/app/core/model/post.mode';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss']
})
export class BlogCardComponent {
  @Input() data:Post=new Post();
  refLink(link:string){
    window.location.href = link;
  }
}
