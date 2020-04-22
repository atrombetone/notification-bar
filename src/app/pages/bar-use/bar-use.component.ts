import { Component, OnInit } from '@angular/core';
import { Item, ItemType } from 'src/app/models/item';
import { ClientesService } from 'src/app/services/clientes.service';
import { NotificationType } from 'src/app/models/notification-type';

@Component({
  selector: 'app-bar-use',
  templateUrl: './bar-use.component.html',
  styleUrls: ['./bar-use.component.scss']
})
export class BarUseComponent implements OnInit {

  items: Item[] = [];
  selectedType: NotificationType;

  constructor(private service: ClientesService) { }

  ngOnInit() {
    this.items.push({type: ItemType.icon, value: 'account_circle'});
    this.items.push({type: ItemType.text, value: 'Para maiores informação e'});
    this.items.push({type: ItemType.link, value: 'clique aqui'}); 
    this.items.push({type: ItemType.text, value: 'e analise os dados'});
  }

  carregarServico() {
    this.service.get('Teste').subscribe(data => {
      alert(JSON.stringify(data));
    });
  }

  atualizarTipo(tipo: number) {
    this.selectedType = tipo;
  }

}
