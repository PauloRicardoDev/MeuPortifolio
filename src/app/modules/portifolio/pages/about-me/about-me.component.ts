import { Component } from '@angular/core';
import {CdkAccordion, CdkAccordionItem} from "@angular/cdk/accordion";

@Component({
  selector: 'app-about-me',
  standalone: true,
  templateUrl: './about-me.component.html',
  imports: [
    CdkAccordion,
    CdkAccordionItem
  ],
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {


  //ABOUTME
  aboutMe = {
    textPresentation : "Me chamo Paulo Ricardo Chagas, já estou há mais de 1 ano e 11 meses aprendendo e " +
    "consolidando meu conhecimento em desenvolvimento de sistemas usando a linguagem Java e" +
        " frameworks como React e Angular. Me identifico com todas as fases de codificação" +
      " durante a confecção de um software, acho extremamente fascinante atuar desde o back " +
      "até o front-end de um projeto, me destaco atualmente pela facilidade em me adaptar" +
      " a projetos em andamento e por atuar na padronização de layout de sistemas.",

    // textPresentationEmphasis : "Tenho facilidade em trabalhar em equipe, e em todas as equipes que atuei me senti" +
    //   " profundamente abraçado e compreendido por meus colegas de trabalho.",

    textMyPhilosophy : "Sou um profissional que valoriza e sempre tento desenvolver minhas soft skills junto com as" +
      " minhas hard skills. Acredito firmemente que todo projeto de software carrega uma parcela " +
      "da história de quem o programa, por isso sempre me dedico em minhas entregas em cada linha de código por mim escrito."
  }

  toHelpYou = [
    {
      title : "Desenvolvimento Full-Stack",
      informations : "Com mais de um ano de experiência em desenvolvimento de sistemas, tanto no back-end quanto" +
        " no front-end, posso oferecer uma abordagem completa e integrada para criar soluções de software." +
        " Utilizando a linguagem Java para o back-end e frameworks modernos como ReactJS e Angular para o front-end," +
        " desenvolvo aplicações robustas e responsivas que atendem às necessidades específicas do seu negócio."
    },
    {
      title : "Adaptação a projetos andamento",
      informations : "Tenho uma habilidade comprovada em me adaptar rapidamente a projetos já em andamento. " +
        "Isso significa que posso me integrar de forma eficiente à sua equipe, entender o contexto atual " +
        "do projeto e contribuir para o progresso sem perder tempo com longas fases de adaptação. " +
        "Minha capacidade de rapidamente compreender e seguir as práticas e padrões existentes " +
        "garante uma continuidade suave no desenvolvimento do projeto."
    },
    {
      title : "Padronização de Layouts",
      informations : "Um dos meus pontos fortes é a padronização de layouts, garantindo que seus sistemas " +
        "tenham uma aparência consistente e profissional. " +
        "Isso melhora a experiência do usuário e facilita a manutenção futura."
    },
    {
      title : "Desenvolvimentos de sites institucionais e pessoais",
      informations : "Ofereço desenvolvimento de sites institucionais e pessoais com design responsivo," +
        " identidade visual coerente, SEO otimizado, segurança e fácil navegação. Para sites pessoais, " +
        "crio portfólios personalizados, blogs integrados e funcionalidades interativas." +
        " Meu processo envolve consulta inicial, planejamento, desenvolvimento," +
        " lançamento e suporte contínuo. Sou um desenvolvedor comprometido com a qualidade e satisfação do cliente." +
        " Vamos conversar sobre como posso destacar sua presença online."
    },
  ]

  // EDU
  courseName = {
    instituicao: "Universidade Federal Rural da Amazônia - (UFRA)",
    name: "Licenciatura em Computação",
    status: "Cursando",
    forecast: "Maio de 2025"
  }


  // myInformations

  myInformations = {
    name: "Paulo Ricardo dos Santos Chagas",
    age: "24 anos",
    email: "paulochagas.dev@gmail.com",
    nationality: "Brasileiro"
  }
}
