import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item, ItemType } from 'src/app/models/item';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { NotificationType } from 'src/app/models/notification-type';

@Component({
  selector: 'ui-notification-bar',
  templateUrl: './ui-notification-bar.component.html',
  styleUrls: ['./ui-notification-bar.component.scss'],
  animations: [
    trigger('EnterLeave', [
      state('flyIn', style({ transform: 'translateX(0)' })),
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('0.5s 300ms ease-in')
      ]),
      transition(':leave', [
        animate('0.3s ease-out', style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class UiNotificationBarComponent implements OnInit {

  @Input() 
  items: Item[];

  @Input()
  type: NotificationType.normal;
  
  @Input()
  simpleText: string;

  constructor() { }

  ngOnInit() {
    if(this.simpleText && this.simpleText != '') {
      this.items = [];
      this.items.push({type: ItemType.text, value: this.simpleText});
    }  
  }

  isIcon(item: Item) {
    return item.type === ItemType.icon;
  }

  isText(item: Item) {
    return item.type === ItemType.text;
  }

  isLink(item: Item) {
    return item.type === ItemType.link;
  }
}
