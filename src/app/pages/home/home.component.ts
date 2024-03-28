import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private meta: Meta,private title: Title) {
    this.meta.addTag({ name: 'description', content: 'Your description here' });
    this.title.setTitle('Your title here');
  }
}
