import { Component } from '@angular/core';
import {routes} from "../../../../app.routes";
import {Router} from "@angular/router";
import {MenuComponent} from "../menu/menu.component";

@Component({
  selector: 'app-presentation',
  standalone: true,
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.scss'
})
export class PresentationComponent {

  infos : any = {
    name : 'Paulo Ricardo Chagas',
    role : 'Full Stack Jr'
  }

  warning : any = {
    title : 'Importante!!!',
    msg : 'Sejam bem vindo(a) ao meu portfólio,\n' +
      'navegue para me conhecer melhor,\n' +
      'use o scroll ou navegue pelo menu lateral!'
  }

  scrollToBottom(): void {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  }

}
