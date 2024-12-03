import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {


// EXPERIÊNCIA
  experience = {
    company: "SIS Innove e Tech",
    duration: "1 - ano e 10 - meses",
    office: "Estágiario Full Stack",
    activities : "Atuar em todas as stacks na produção de um software, desde a prototipação até o deploy",
    projects : [
      {
        project : 'RH - tech hunting',
        obs: 'Sistema interno'
      },
      {
        project : 'RH - Programa de Formação',
        obs: 'Sistema interno'
      },
      {
        project : 'Gestão Odonto Prev',
        obs: 'Sistema externo'
      },
      {
        project : 'RHBS - Gestão',
        obs: 'Sistema externo'
      }
    ]
  }

  lastExperience = {
    company: "Universidade Federal Rural da  Amazônia",
    duration: "6 meses",
    office: "Monitor Acadêmico",
    activities : "Auxiliar em sala de aula o docente a organizar atividade e sanar dúvidas dos alunos",
  }
}
