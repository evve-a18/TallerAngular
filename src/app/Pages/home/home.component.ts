import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'ui-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  @Input() Image!:string;
  @Input() title!:string;
  @Input() info!:string;
  @Input() textbtn!:string;
  @Input() clickEvent!:() => void;

  onClick(){
    this.clickEvent();
  }
}
