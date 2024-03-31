import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/core/model/post.mode';
import { HomeService } from 'src/app/core/services/home.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  slug: string='';
  text: string='';
  listBlogHome:Post[] = [];
  constructor(private route: ActivatedRoute,private meta: Meta,private title: Title,private service: HomeService) {
    this.meta.addTag({ name: 'description', content: 'Your description here' });
    this.title.setTitle('Your title here');
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.slug=params.get('slug') || '';
      this.text="";
      this.getbloghome();
    });
  }
  getbloghome(){
    this.service.getbloghome(this.text,this.slug).subscribe(data => {
      this.listBlogHome = data.data;
    });
  }
  searchBlog(text:string){
    this.text=text;
    this.getbloghome();
  }

}
