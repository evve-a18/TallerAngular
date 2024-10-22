import { Component, Input, input } from '@angular/core';
import { CardComponent } from "../../Component/card/card.component";

@Component({
  selector: 'ui-home',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  verPerfil(){
    alert("Ver Perfil")
  }

  conocerMas(){
    alert("Ver mas fotos");
  }

  goProducts(){
    window.location.href="/products"
  }
}
