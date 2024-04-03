import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    this.totalPage=Math.floor(this.total/this.pageSize);
    this.listPage=[];
    for(let i=0;i<=this.totalPage;i++){
      this.listPage.push((i+1));
    }

  }
 totalPage:number=0;
  @Input() current:number=0;
  @Input() total:number=0;
  @Input() pageSize:number=0;
  @Output() actionChangePage= new EventEmitter<any>();


  listPage:number[]=[];
  changePage(page:number){
    this.actionChangePage.emit(page);
  }
}
