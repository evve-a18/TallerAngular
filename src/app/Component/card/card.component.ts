import { Component, Input, signal} from '@angular/core';
import { Productos, Usuarios } from '../../models/test';

type Data= {
  data: Productos | Usuarios
}
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  text= signal('');
  @Input() data!:Data;
  @Input() clickEvent!:() => void;

  onChange(event:any){
    this.text.set(event.target.value);
    this.data.data.description= this.text();
  }
  onClick(){
    console.log(this.data.data);
  }
}
