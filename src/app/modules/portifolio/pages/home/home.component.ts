import { Component } from '@angular/core';
import {FooterComponent} from "../../components/footer/footer.component";
import {PresentationComponent} from "../presentation/presentation.component";
import {MenuComponent} from "../menu/menu.component";
import {MenuLateralComponent} from "../../components/menu-lateral/menu-lateral.component";
import {AboutMeComponent} from "../about-me/about-me.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FooterComponent,
    PresentationComponent,
    MenuComponent,
    MenuLateralComponent,
    AboutMeComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
