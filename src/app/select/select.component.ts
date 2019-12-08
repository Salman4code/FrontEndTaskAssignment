import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  @Input() options:any[];
  selectedColor:any ='Colours';
  searchText:any;
  itemsCopy: any;
  constructor() { }

  ngOnInit() {
    this.itemsCopy = this.options;
  }

  search() {
    let term = this.searchText;
    console.log(this.searchText);
    
    this.options = this.itemsCopy.filter((tag)=> {
      console.log(tag);
        if(tag.name){
          return tag.title.indexOf(term) >= 0;
        }else{
          return tag.indexOf(term) >= 0;
        }
    }); 
}
selectAll(){
  console.log('test');
  
}

}
