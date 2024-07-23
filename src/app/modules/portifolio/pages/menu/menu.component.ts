import {Component, ElementRef, ViewChild} from '@angular/core';
import {PresentationComponent} from "../presentation/presentation.component";
import {NgClass, NgIf} from "@angular/common";
import {FooterComponent} from "../../components/footer/footer.component";
import {CdkAccordion, CdkAccordionItem} from "@angular/cdk/accordion";
import {MatTooltip} from "@angular/material/tooltip";
import {MatProgressBar} from "@angular/material/progress-bar";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    PresentationComponent,
    NgIf,
    NgClass,
    FooterComponent,
    CdkAccordionItem,
    CdkAccordion,
    MatTooltip,
    MatProgressBar,
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

  // MENU - itens
  itemMenu = {
    about : {
      title : 'Sobre mim',
      description : ''
    },
    exp : {
      title : 'Experiência',
      description: '"Recentemente, enfrentei um desafio interessante no mercado..."'
    },
    hab : {
      title: 'Habilidades',
      description : '"Ultimamente, tenho mergulhado em aprender e aprimorar meus conhecimentos..."'
    },
    edu : {
      title : 'Educação',
      description : '"Ao longo dos meus estudos e experiencias no mercado desenvolvi habilidades como..."'
    },
    projects : {
      title : 'Projetos',
      description : '"Em meus projetos, decidi aplicar os conhecimentos adquiridos ao longo dos meus..."'
    }
  }

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
      percentage : 80
    },
    {
      src : 'assets/hab-svgs/react.svg',
      alt : 'imagem logo framework react cor azul',
      title: 'Proficiência em React',
      percentage : 75
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
      percentage : 85
    },
    {
      src : 'assets/hab-svgs/nodeJS.svg',
      alt : 'imagem logo nodeJS cor verde',
      title: 'Proficiência básica em nodeJS',
      percentage : 60
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
  personalNoteHab = "Ultimamente, tenho mergulhado profundamente no aprendizado" +
    " e no aperfeiçoamento dos meus conhecimentos em desenvolvimento de sistemas. " +
    "Este portfólio é uma prova concreta dessa jornada de dedicação, estou extremamente" +
    " grato pelo resultado alcançado até agora, e este portfólio é um testemunho do " +
    "esforço contínuo e da paixão que tenho pela tecnologia. " +
    "Agradeço a todos que me apoiaram nessa trajetória, e espero que este portfólio inspire e " +
    "demonstre a qualidade e o cuidado que coloco em cada trabalho que realizo."

  // EXPERIÊNCIA
  lastExperience = {
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

  personalNoteEpx = "Esta foi a minha primeira e única experiência até o momento. " +
    "Sou muito grato pela oportunidade e pela responsabilidade que assumi durante " +
    "esse período, sem dúvida inesquecível." +
    " Estou aberto a propostas; entre em contato comigo pelos itens do menu acima."

  // EDU
  courseName = {
    name: "Licenciatura em Computação",
    status: "Cursando",
    forecast: "Dezembro de 2024"
  }

  training = [
    {
      name: '',
    }
  ]

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

  expandedIndex = 0;

  isAboutMe: boolean = false;
  isExp: boolean = false;
  ishab: boolean = false;
  isEdu: boolean = false;
  isProject: boolean = false;

  @ViewChild('myDiv') myDiv!: ElementRef;
  @ViewChild('expDiv') expDiv!: ElementRef;
  @ViewChild('habDiv') habDiv!: ElementRef;
  @ViewChild('eduDiv') eduDiv!: ElementRef;
  @ViewChild('projectDiv') projectDiv!: ElementRef;

  toggleDiv(section: string) {
    this.isAboutMe = section === 'aboutMe' ? !this.isAboutMe : false;
    this.isExp = section === 'exp' ? !this.isExp : false;
    this.ishab = section === 'hab' ? !this.ishab : false;
    this.isEdu = section === 'edu' ? !this.isEdu : false;
    this.isProject = section === 'project' ? !this.isProject : false;

    let targetDiv: ElementRef | null = null;

    switch (section) {
      case 'aboutMe':
        targetDiv = this.myDiv;
        break;
      case 'exp':
        targetDiv = this.expDiv;
        break;
      case 'hab':
        targetDiv = this.habDiv;
        break;
      case 'edu':
        targetDiv = this.eduDiv;
        break;
      case 'project':
        targetDiv = this.projectDiv;
        break;
    }

    if (targetDiv) {
      setTimeout(() => {
        targetDiv.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'nearest'});
      }, 500);
    }
  }

}
