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
  current:number=1;
  total:number=0;
  pageSize:number=0;
  constructor(private route: ActivatedRoute,private meta: Meta,private title: Title,private service: HomeService) {
    this.meta.addTag({ name: 'description', content: 'Your description here' });
    this.title.setTitle('New Tool Share');
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.slug=params.get('slug') || '';
      this.text="";
      if(this.slug!=""){
        this.title.setTitle(`New Tool Share - ${this.slug}`);

      }

      this.getbloghome();
    });
  }
  getbloghome(){
    this.service.getbloghome(this.current,this.text,this.slug).subscribe(data => {
      this.listBlogHome = data.data.data;
      this.total=data.data.total;
      this.current=data.data.current;
      this.pageSize=data.data.pageSize;
    });
  }
  searchBlog(text:string){
    this.text=text;
    this.getbloghome();
  }
  changePage(page:number){
    this.current=page;
    this.getbloghome();
  }

}
