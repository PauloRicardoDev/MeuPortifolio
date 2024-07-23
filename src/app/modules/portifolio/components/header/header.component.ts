import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  linkLinkedin() {
    window.location.href = "https://www.linkedin.com/in/paulo-ricardo-chagas-99904b244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app";
  }

  linkWhatsApp(){
    window.location.href = "https://wa.me/qr/BH5CC4MSBRJBI1"
  }

  downloadPDF() {
    const link = document.createElement('a');
    link.href = 'assets/pdf/cvPauloRicardoChagas.pdf';
    link.download = 'cvPauloRicardoChagas.pdf';
    link.click();
  }

}
