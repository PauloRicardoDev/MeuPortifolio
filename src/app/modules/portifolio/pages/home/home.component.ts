import { Component } from '@angular/core';
import {FooterComponent} from "../../components/footer/footer.component";
import {PresentationComponent} from "../presentation/presentation.component";
import {MenuComponent} from "../menu/menu.component";
import {AboutMeComponent} from "../about-me/about-me.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FooterComponent,
    PresentationComponent,
    MenuComponent,
    AboutMeComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  isLoading: boolean = false;

  constructor(
    private router: Router
  ) {
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
  }

}
