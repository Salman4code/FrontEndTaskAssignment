import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  colors = ['red', 'yellow', 'green', 'blue'];
  components =
[{ ​ "title"​ : ​ "Button"​ , ​ "path"​ : ​ "demo-button"​ },
{ ​ "title"​ : ​ "Selection Control"​ , ​ "path"​ : ​ "demo-selection-control"​ },
{ ​ "title"​ : ​ "Input"​ , ​ "path"​ : ​ "demo-input"​ },
{ ​ "title"​ : ​ "Snackbar"​ , ​ "path"​ : ​ "demo-snack-bar"​ },
{ ​ "title"​ : ​ "Chips"​ , ​ "path"​ : ​ "demo-chips"​ },
{ ​ "title"​ : ​ "Progress Tabs"​ , ​ "path"​ : ​ "demo-vertical-tabs"​ },
{ ​ "title"​ : ​ "Typography"​ , ​ "path"​ : ​ "demo-wip"​ },
{ ​ "title"​ : ​ "Card"​ , ​ "path"​ : ​ "demo-wip"​ },
{ ​ "title"​ : ​ "Pagination"​ , ​ "path"​ : ​ "demo-wip"​ },
{ ​ "title"​ : ​ "Progress Tabs"​ , ​ "path"​ : ​ "demo-wip"​ }];
  constructor() { }

  ngOnInit() {
  }

}
