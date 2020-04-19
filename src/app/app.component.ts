import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'appBar';

  vermelho = '#f00';
  azul = '#0627D9';
  verde = '#00A500';
  amarelo = '#FFE800';

  corSelecionada = this.amarelo;

  mudarCorPara(cor: string) {
    this.corSelecionada = cor;
  }

  onClickEvent(event) {
    alert('Clicou no botão\n' + event );
  }
}
