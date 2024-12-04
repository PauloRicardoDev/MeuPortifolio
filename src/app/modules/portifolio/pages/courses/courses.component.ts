import { Component } from '@angular/core';
import {CdkAccordion, CdkAccordionItem} from "@angular/cdk/accordion";

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [
    CdkAccordion,
    CdkAccordionItem
  ],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {
  separateCourses = [
    {
      name : 'Formações',
      children: [
        {name: 'Formação Java Web: crie aplicações com Servlets e MVC - Alura'},
        {name: 'Formação Integre aplicações Java com Banco de dados - Alura'},
        {name: 'Formação Spring Framework - Alura'},
        {name: 'Formação JAVA - Alura'},
        {name: 'Formação Scrum - Alura'},
        {name: 'Programa Formação JAVA - SIS Innov e Tech'}
      ],
    },

    {
      name : 'Back end',
      children: [
        {name: 'TDD e Java: testes automatizados com JUnit - Alura'},
        {name: 'typeScript: Básico ao intermediário - Udemy'},
        {name: 'javaScript: Básico ao intermediário - Udemy'},
        {name: 'Programação Orientada a Objetos +Projetos - Udemy'},
        {name: 'Algoritmos e Lógica de Programação do básico ao avançado - Udemy'},
      ],
    },

    {
      name : 'Front end',
      children: [
        {name: 'HTML5 e CSS3 Básico ao avançado - Alura'},
        {name: 'React na prática - Udemy'},
        {name: 'Mini Curso Vue.js na prática - Udemy'},
        {name: 'Docker e React do zero ao deploy - Udemy'},
        {name: 'Figma para devs - Ada Tech'},
        {name: 'Angular do básico ao avançado'},
      ],
    },

    {
      name : 'Banco de dados',
      children: [
        {name: 'SQL do básico ao avançado (com MySQL e Projeto)- Udemy'},
        {name: 'Desempenho do Oracle Database: otimização de consultas - Udemy'},
        {name: 'Banco de dados postgres - Ada tech'},
      ],
    },

    {
      name : 'Versionamento',
      children: [
        {name: 'Git e Github: controle e compartilhe seu código - Alura'},
        {name: 'Git e Github na prática - Udemy'},
      ],
    },

    {
      name : 'Sistema Operacinal',
      children: [
        {name: 'Linux Completo para Usuário Comum ou Desenvolvedor - Udemy'},
      ],
    },

  ]
}
