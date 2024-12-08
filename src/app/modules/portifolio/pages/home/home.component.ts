import { Component, OnInit } from '@angular/core';
import { FooterComponent } from "../../components/footer/footer.component";
import { PresentationComponent } from "../presentation/presentation.component";
import { MenuComponent } from "../menu/menu.component";
import { AboutMeComponent } from "../about-me/about-me.component";
import { Router } from "@angular/router";
import { ExperienceComponent } from "../experience/experience.component";
// @ts-ignore
import * as AOS from 'aos';  // Tipagem implicitamente como "any"
import 'aos/dist/aos.css';
import {SkillsComponent} from "../skills/skills.component";
import {ProjectsComponent} from "../projects/projects.component";
import {CoursesComponent} from "../courses/courses.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FooterComponent,
    PresentationComponent,
    MenuComponent,
    AboutMeComponent,
    ExperienceComponent,
    SkillsComponent,
    ProjectsComponent,
    CoursesComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isLoading: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Inicializa o AOS com configurações para animação de entrada e saída
    AOS.init({
      duration: 700,  // A duração da animação em milissegundos
      once: false,     // A animação ocorre toda vez que o elemento entra na tela
      easing: 'ease-in-out',  // Tipo de transição da animação
      mirror: true,    // Faz com que a animação seja disparada na entrada e na saída
    });

    // Atualiza o AOS sempre que a página rolar (detecta entrada e saída)
    window.addEventListener('scroll', () => {
      AOS.refresh(); // Atualiza as animações ao rolar a página
    });
  }

  isMenuExpanded = false;

  toggleMenu(): void {
    this.isMenuExpanded = !this.isMenuExpanded;
  }

  closeMenu(event: MouseEvent): void {
    event.stopPropagation(); // Impede que o clique feche o menu ao clicar no botão de saída
    this.isMenuExpanded = false;
  }

  linkLinkedin() {
    window.open("https://www.linkedin.com/in/paulo-ricardo-chagas-99904b244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", "_blank", "noopener,noreferrer");
  }

  linkWhatsApp() {
    window.open("https://wa.me/qr/BH5CC4MSBRJBI1", "_blank", "noopener,noreferrer");
  }

  downloadPDF() {
    this.isLoading = true;

    setTimeout(() => {
      this.isLoading = false;

      const link = document.createElement('a');
      link.href = 'assets/pdf/cvPauloRicardoChagas.pdf';
      link.download = 'cvPauloRicardoChagas.pdf';

      document.body.appendChild(link);
      link.click();

      document.body.removeChild(link);
    }, 2000);
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    this.isMenuExpanded = false;
  }

}
