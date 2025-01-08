import { Component, HostListener } from '@angular/core';
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
  }
  isShow:boolean=false;
  @HostListener('window:scroll', ['$event']) onScroll(e: Event): void {
    let marginTop = window.scrollY;
    if(marginTop>400){
      this.isShow=true
    }
    else{
      this.isShow=false;
    }
  }
  data:Post=new Post();
  slug: string='';
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.slug=params.get('slug') || '';
      this.title.setTitle(`New Tool share - ${this.slug}`);
      this.getblogbyslug();
      // this.getbloghome();
    });
  }
  getblogbyslug(){
    this.service.getblogbyslug(this.slug).subscribe(data => {
      // this.listBlogHome = data.data;
      this.data = data.data;
      if(data.data.linkRef!=""&&data.data.linkRef!=null){
        this.refLink(data.data.linkRef);
      }
    });
  }
  refLink(link:string){
    window.location.href = link;
  }
}
