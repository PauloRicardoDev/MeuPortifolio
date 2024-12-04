import { Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  //PROJECTS
  projectsCards = [
    {
      src: 'assets/projects-imgs/project-gardenHome.png',
      name: 'Projeto Garden At Home',
      description: 'projeto landing page sobre cactos e suculentas',
      technologies: 'Html 5, CSS e JavaScript',
      url : 'https://my-garden-at-home.netlify.app/',
      link_repo: [
        {
          url: 'https://github.com/PauloRicardoDev/landingPageGardenAtHome.git'
        }
      ],
      notas : ''
    },
    {
      src: 'assets/projects-imgs/project-appImage.png',
      name: 'Projeto App Lite Image',
      description: 'Projeto de galeria digital para gestão e armazenamento de imagens',
      technologies: 'Java, TypeScript, React, SCSS, PostgresSQL, SpringBoot',
      url : '',
      link_repo: [
        {
          url : 'https://github.com/PauloRicardoDev/front-image-lite.git'
        },
        {
          url : 'https://github.com/PauloRicardoDev/api-image-lite.git'
        }
      ],
      notas : ''
    },
    {
      src: 'assets/projects-imgs/project-contact-list.png',
      name: 'Projeto Meus Cpntatos App',
      description: 'Projeto de gestão e armazenamento de contatos',
      technologies: 'Firebase, TypeScript, Angular, SCSS',
      url : 'https://app-contact-list.vercel.app/login',
      link_repo: [
        {
          url : 'https://github.com/PauloRicardoDev/AppContactList.git'
        }
      ],
      notas : ''
    },
  ]

  redirectLink(url: any) {
    // @ts-ignore
    window.open(url, "_blank", "noopener,noreferrer");
  }
}
