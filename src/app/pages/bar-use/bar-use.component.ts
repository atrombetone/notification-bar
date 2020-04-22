import { Component, OnInit } from '@angular/core';
import { Item, ItemType } from 'src/app/models/item';

@Component({
  selector: 'app-bar-use',
  templateUrl: './bar-use.component.html',
  styleUrls: ['./bar-use.component.scss']
})
export class BarUseComponent implements OnInit {

  items: Item[] = [];
  constructor() { }

  ngOnInit() {
    this.items.push({type: ItemType.icon, value: 'account_circle'});
    this.items.push({type: ItemType.text, value: 'Para maiores informação e'});
    this.items.push({type: ItemType.link, value: 'clique aqui', action: function () {
      alert('Clicou nessa jossa'); 
    }});
    this.items.push({type: ItemType.text, value: 'e analise os dados'});
  }

  metodoClique(event) {
    alert(event);
  } 

}
