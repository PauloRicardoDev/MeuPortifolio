import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'] // Correção aqui
})
export class HeaderComponent {
  isLoading: boolean = false;

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
}
