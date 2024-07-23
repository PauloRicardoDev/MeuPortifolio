import { Component } from '@angular/core';
import {FooterComponent} from "../../components/footer/footer.component";
import {PresentationComponent} from "../presentation/presentation.component";
import {MenuComponent} from "../menu/menu.component";
import {HeaderComponent} from "../../components/header/header.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FooterComponent,
    PresentationComponent,
    MenuComponent,
    HeaderComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
