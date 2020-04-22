import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ui-text-item',
  templateUrl: './ui-text-item.component.html',
  styleUrls: ['./ui-text-item.component.scss']
})
export class UiTextItemComponent implements OnInit {

  @Input()
  value = '';
  
  constructor() { }

  ngOnInit() {
  }

}
