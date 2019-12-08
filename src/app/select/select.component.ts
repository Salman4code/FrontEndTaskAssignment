import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  @Input() options:any[];
  @Input() searchable: Boolean = true;
  @Input() multiselect: Boolean = false;
  selectedColor:any ='Colours';
  searchText:any;
  itemsCopy: any;
  isOptionChecked :any = {
    selectAll : false
  };
  selectOption:any=[];
  result: string;
  showDropDown:boolean = false;
  isSelectAll:boolean = false;
  constructor() { }

  ngOnInit() {
    this.itemsCopy = this.options;
  }

  search() {
    let term = this.searchText;    
    this.options = this.itemsCopy.filter(tag=> {
        if(tag.title){
          return tag.title.indexOf(term) >= 0;
        }else{
          if(tag.indexOf(term)>=0){
            console.log(tag);
          }
          return tag.indexOf(term) >= 0;
        }
    }); 
}
selectAll(){
  this.isOptionChecked.selectAll = !this.isOptionChecked.selectAll; 
  if(this.isOptionChecked.selectAll){
    this.selectOption = this.itemsCopy;
  }else{
    this.selectOption=[];
  }
}

checkedBoxClicked(i){
  this.isOptionChecked[i] = ! this.isOptionChecked[i];
  if(this.isOptionChecked[i]){
    //adding element 
    if(this.selectOption.indexOf(this.itemsCopy) == -1){
      this.selectOption.push(this.itemsCopy[i]);
    }
  }else{
    // remove selected element from array
    if(this.selectOption.indexOf(this.itemsCopy) == -1){
    this.selectOption.splice(i,1);
    }
  }
}
submit(){
  this.showDropDown = false;  
  this.result= this.selectOption.join();
}

clearResult(){
  this.result = null;
  this.isOptionChecked = {}
  this.searchText = '';
  this.search();
}

selectClick(){
  this.showDropDown = !this.showDropDown;
}

}
