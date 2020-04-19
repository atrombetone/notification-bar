import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ui-notification-bar',
  templateUrl: './ui-notification-bar.component.html',
  styleUrls: ['./ui-notification-bar.component.scss']
})
export class UiNotificationBarComponent implements OnInit {

  @Input()
  text: string = '';

  @Input()
  textButton: string = '';

  @Input()
  barCollor: string = 'yellow';

  @Output() 
  onClickButton: EventEmitter<any> = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  onClick(event) {
    this.onClickButton.emit(event);
  }
}
