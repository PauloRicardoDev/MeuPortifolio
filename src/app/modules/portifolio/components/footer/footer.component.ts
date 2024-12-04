import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  linkLinkedin() {
    window.open("https://www.linkedin.com/in/paulo-ricardo-chagas-99904b244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", "_blank", "noopener,noreferrer");
  }

  linkWhatsApp() {
    window.open("https://wa.me/qr/BH5CC4MSBRJBI1", "_blank", "noopener,noreferrer");
  }
}
