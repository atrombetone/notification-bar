import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
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
  type: NotificationType;
  
  @Input()
  simpleText: string;

  @Output()
  action = new EventEmitter<any>();

  screenWidth: number;

  constructor() { }

  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    this.screenWidth = window.innerWidth;
  }

  isMobile() {
    return this.screenWidth <= 500;
  }

  ngOnInit() {
    this.onResize();
    if(this.simpleText && this.simpleText != '') {
      this.items = [];
      this.items.push({type: ItemType.text, value: this.simpleText});
    }  
  }

  avaliarTipo() {
    switch(this.type) {
      case NotificationType.atencao: return 'c-atencao';
      case NotificationType.sucesso: return 'c-sucesso';
      case NotificationType.normal: return 'c-normal';
      case NotificationType.erro: return 'c-erro';
    }
  }

  actionExecute(event, clicouNoLink) {
    if (this.isMobile() || clicouNoLink)
      this.action.emit(event);
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
