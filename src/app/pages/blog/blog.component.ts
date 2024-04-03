import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/core/model/post.mode';
import { BlogService } from 'src/app/core/services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  constructor(private route: ActivatedRoute,private meta: Meta,private title: Title,private service: BlogService) {
    this.meta.addTag({ name: 'description', content: 'Your description here' });
    this.title.setTitle('Your title here');
  }
  data:Post=new Post();
  slug: string='';
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.slug=params.get('slug') || '';
      this.getblogbyslug();
      // this.getbloghome();
    });
  }
  getblogbyslug(){
    this.service.getblogbyslug(this.slug).subscribe(data => {
      // this.listBlogHome = data.data;
      this.data = data.data;
    });
  }
}
