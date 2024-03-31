import { Component, OnInit } from '@angular/core';
import { NavService } from 'src/app/core/services/nav.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit{
  listNav:any[] = [];

  constructor(
    private navService: NavService
  ) { }
  ngOnInit(): void {
    this.getAll();
  }
  getAll(){
    this.navService.getAll('1').subscribe(data => {
      this.listNav = data.data;
    });
  }
}
