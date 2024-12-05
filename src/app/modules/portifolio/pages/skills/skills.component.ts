import { Component } from '@angular/core';
import {MatProgressBar} from "@angular/material/progress-bar";
import {CdkAccordion, CdkAccordionItem} from "@angular/cdk/accordion";

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    MatProgressBar,
    CdkAccordion,
    CdkAccordionItem
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  softSkills = [
    {
      name: 'Trabalho em Equipe',
      description: 'Sempre tive facilidade em colaborar com colegas de diferentes áreas. ' +
        'Em todos os projetos que participei, me senti profundamente abraçado e compreendido pelos meus colegas.' +
        ' Acredito que um bom trabalho em equipe é fundamental para o sucesso de qualquer projeto.'
    },
    {
      name: 'Comunicação Eficaz',
      description: ' Valorizo a comunicação clara e assertiva. Sei que transmitir ideias ' +
        'de forma eficiente é essencial para alinhar expectativas e alcançar os objetivos comuns.',
    },
    {
      name: 'Adaptabilidade',
      description: 'Sou uma pessoa flexível e me adapto rapidamente a mudanças.' +
        ' Esta habilidade me permite enfrentar novos desafios com confiança ' +
        'e me ajustar facilmente a novas metodologias e ferramentas.',
    },
    {
      name: 'Empatia',
      description: 'Acredito que entender e respeitar as perspectivas dos outros é crucial para construir um ambiente' +
        ' de trabalho harmonioso e produtivo. Tento sempre colocar-me no lugar do outro e agir com compreensão.'
    },
    {
      name: 'Resolução de Problemas',
      description: 'Gosto de enfrentar problemas complexos e encontrar soluções criativas.' +
        ' Minha abordagem analítica e minha persistência' +
        ' me ajudam a superar obstáculos e a alcançar resultados eficazes.'
    },
    {
      name: 'Gestão do Tempo',
      description: 'Organizo minhas tarefas de maneira eficiente, garantindo que os ' +
        'prazos sejam cumpridos sem comprometer a qualidade do trabalho.'
    },
    {
      name: 'Planejamento e Organização',
      description: 'Sou proativo na definição de metas e prazos para mim mesmo.' +
        ' Utilizo ferramentas de gerenciamento de tarefas e técnicas de' +
        ' produtividade para manter minhas atividades bem organizadas e priorizadas.'
    },
    {
      name: 'Autodisciplina',
      description: 'O Tenho uma forte autodisciplina que me permite focar no trabalho e evitar distrações.' +
        ' Sei a importância de manter um equilíbrio entre urgência e qualidade.'
    },
    {
      name: 'Responsabilidade Pessoal',
      description: 'Assumo total responsabilidade pelas minhas tarefas e compromissos.' +
        ' Cumpro prazos e entrego resultados consistentes, garantindo que' +
        ' minhas contribuições sejam valiosas para a equipe e para o projeto.'
    }
  ];

  hardSkills : any =  [
    {
      src : 'assets/hab-svgs/html.svg',
      alt : 'imagem logo html cor laranja',
      title: 'Proficiência em Html5',
      percentage : 85
    },
    {
      src : 'assets/hab-svgs/css.svg',
      alt : 'imagem logo css cor azul',
      title: 'Proficiência em Css3',
      percentage : 80
    },
    {
      src : 'assets/hab-svgs/scss.svg',
      alt : 'imagem logo Scss cor rosa',
      title: 'Proficiência em Scss',
      percentage : 80
    },
    {
      src : 'assets/hab-svgs/tailwindCss.svg',
      alt : 'imagem logo tailwindCss cor verde',
      title: 'Proficiência em tailwind css',
      percentage : 75
    },
    {
      src : 'assets/hab-svgs/bootstrap.svg',
      alt : 'imagem logo bootstrap cor roxa',
      title: 'Proficiência em bootstrap',
      percentage : 70
    },
    {
      src : 'assets/hab-svgs/angular.svg',
      alt : 'imagem logo framework angular cor vermelha',
      title: 'Proficiência em Angular',
      percentage : 75
    },
    {
      src : 'assets/hab-svgs/react.svg',
      alt : 'imagem logo framework react cor azul',
      title: 'Proficiência em React',
      percentage : 40
    },
    {
      src : 'assets/hab-svgs/javaScript.svg',
      alt : 'imagem logo javascript cor amarela',
      title: 'Proficiência em javascript',
      percentage : 80
    },
    {
      src : 'assets/hab-svgs/typeScript.svg',
      alt : 'imagem logo typescript cor azul',
      title: 'Proficiência em typescript',
      percentage : 75
    },
    {
      src : 'assets/hab-svgs/nodeJS.svg',
      alt : 'imagem logo nodeJS cor verde',
      title: 'Proficiência básica em nodeJS',
      percentage : 40
    },
    {
      src : 'assets/hab-svgs/python.svg',
      alt : 'imagem logo python nas cores amarelo e azul',
      title: 'Proficiência básica em python',
      percentage : 40
    },
    {
      src : 'assets/hab-svgs/java.svg',
      alt : 'imagem logo Java nas cores azul e laranja',
      title: 'Proficiência em Java',
      percentage : 75
    },
    {
      src : 'assets/hab-svgs/spring.svg',
      alt : 'imagem logo framework spring cor verde',
      title: 'Proficiência em spring',
      percentage : 80
    },
    {
      src : 'assets/hab-svgs/postgres.svg',
      alt : 'imagem logo postgres cor branca',
      title: 'Proficiência básica em postgres ',
      percentage : 65
    },
    {
      src : 'assets/hab-svgs/mySql.svg',
      alt : 'imagem logo mySql cor azul',
      title: 'Proficiência em mySql',
      percentage : 80
    },
    {
      src : 'assets/hab-svgs/git.svg',
      alt : 'imagem logo git cor laranja',
      title: 'Proficiência em git',
      percentage : 85
    },
    {
      src : 'assets/hab-svgs/postman.svg',
      alt : 'imagem logo postman cor laranja',
      title: 'Proficiência em postman',
      percentage : 80
    }
  ]

  // HABILIDADES
  personalNoteHab = "Tenho me dedicado intensamente ao aprendizado e aperfeiçoamento em desenvolvimento de sistemas," +
    " e este portfólio reflete essa jornada. Sou grato pelo progresso alcançado e " +
    "pelo apoio recebido ao longo do caminho. Espero que ele inspire e demonstre o cuidado e " +
    "a qualidade que coloco em cada projeto."
}
