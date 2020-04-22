import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ui-icon-item',
  templateUrl: './ui-icon-item.component.html',
  styleUrls: ['./ui-icon-item.component.scss']
})
export class UiIconItemComponent implements OnInit {

  @Input()
  value : string;
  
  constructor() { }

  ngOnInit() {
  }

}
