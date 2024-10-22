import { Component } from '@angular/core';
import { Roles, Usuarios } from '../../models/test';
import { CardComponent } from "../../Component/card/card.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  roles:Roles={
    rol:"Cliente"
  }
  usuarios:Usuarios[]=[
    {
      id: 1,
      name: "Evelin Alvarado",
      description: "Alumno de 5to",
      rol:{rol:"Alumno"}
    },
    {
      id: 2,
      name: "Migael Limon",
      description: "Estudiante de CS",
      rol:{rol:"Alumno"}
    },
    {
      id: 3,
      name: "Max Contreras",
      description: "Estudiante de CUT",
      rol:{rol:"Alumno"}
    },
    {
      id: 4,
      name: "Sam Treanor",
      description: "Profesor de Matematicas",
      rol:{rol:"Maestro"}
    },
    {
      id: 5,
      name: "Andrea Gonzalez",
      description: "Egresada de CUCEI",
      rol:{rol:"Alumno"}
    },
    {
      id: 6,
      name: "Paola Agraz",
      description: "Alumna de CS",
      rol:{rol:"Alumno"}
    },
    {
      id: 7,
      name: "Matthew Gabriel",
      description: "Alumno de 5to",
      rol:{rol:"Alumno"}
    },
  ]
}
