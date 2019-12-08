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
  isOptionChecked :any = {
    selectAll : false
  };
  selectOption:any=[];
  result: string;
  showDropDown:boolean = false
  constructor() { }

  ngOnInit() {
    this.itemsCopy = this.options;
  }

  search() {
    let term = this.searchText;
    console.log(this.searchText);
    
    this.options = this.itemsCopy.filter((tag)=> {
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
  console.log('test');
  this.isOptionChecked.selectAll = !this.isOptionChecked.selectAll;
  
}

checkedBoxClicked(i){
  this.isOptionChecked[i] = ! this.isOptionChecked[i];
  if(this.isOptionChecked[i]){
    //adding element 
    this.selectOption.push(this.itemsCopy[i]);
  }else{
    // remove selected element from array
    this.selectOption.splice(i,1);
  }
}
submit(){
  this.showDropDown = false;
  console.log(this.selectOption);
  
  this.result= this.selectOption.join();
}

clearResult(){
  this.result = null;
  this.isOptionChecked = {}
}

selectClick(){
  this.showDropDown = !this.showDropDown;
}

}
