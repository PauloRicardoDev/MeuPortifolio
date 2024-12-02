import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-lateral',
  standalone: true,
  imports: [],
  templateUrl: './menu-lateral.component.html',
  styleUrl: './menu-lateral.component.scss'
})
export class MenuLateralComponent {
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
