import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent {
@Input() placeholder:string = 'Search...';
@Input() search:string = '';
@Output() actionEvent = new EventEmitter<any>();
searchAction(){
  this.actionEvent.emit(this.search);
}
}
