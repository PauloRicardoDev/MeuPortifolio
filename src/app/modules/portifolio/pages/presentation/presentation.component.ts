import { Component } from '@angular/core';
import {routes} from "../../../../app.routes";
import {Router} from "@angular/router";
import {MenuComponent} from "../menu/menu.component";

@Component({
  selector: 'app-presentation',
  standalone: true,
  imports: [],
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.scss'
})
export class PresentationComponent {

  infos : any = {
    name : 'Paulo Ricardo Chagas',
    role : 'Full Stack'
  }

  warning : any = {
    title : 'Importante!!!',
    msg : 'Sejam bem vindo(a) ao meu portfólio,\n' +
      'use o menu abaixo pra me conhecer melhor,\n' +
      'clique nos cards!'
  }

  scrollToBottom(): void {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  }

}
