import { Component, HostListener, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'appBar';

  vermelho = '#f00';
  azul = '#0627D9';
  verde = '#00A500';
  amarelo = '#FFE800';

  screenHeight : number;
  screenWidth :  number;

  corSelecionada = this.amarelo;

  //itens = Item[];

  constructor() {
    this.onResize();
  }

  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  mudarCorPara(cor: string) {
    this.corSelecionada = cor;
  }

  onClickEvent(event) {
    alert('Clicou no botão\n' + event );
  }

  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
  }
}
