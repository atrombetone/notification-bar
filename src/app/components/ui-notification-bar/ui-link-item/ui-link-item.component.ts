import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ui-link-item',
  templateUrl: './ui-link-item.component.html',
  styleUrls: ['./ui-link-item.component.scss']
})
export class UiLinkItemComponent implements OnInit {

  @Input()
  value = '';

  @Input()
  callBack: Function;
  
  constructor() { }

  ngOnInit() {
  }

  onClick(event) {
    if(this.callBack) {
      this.callBack();
    }
  }

}
