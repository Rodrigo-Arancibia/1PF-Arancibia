import { Component, OnInit, ViewChild } from '@angular/core';
import { Alumno } from 'src/app/interfaces/alumno';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  @ViewChild('closeModal') closeModal: any
  @ViewChild('editarAlumnoModal') editarAlumnoModal: any

  showModal: boolean = false;
  infoAlumno: Alumno = { nombre: '', apellido: '', edad: 0, id: 0 }

  alumnos: Alumno[] = [
    { nombre: 'Rodrigo', apellido: 'Arancibia', edad: 30, id: 0 },
    { nombre: 'hernan', apellido: 'arancibia', edad: 16, id: 1 },
    { nombre: 'Carla', apellido: 'Diaz', edad: 25, id: 2 },
  ];

  constructor() {

  }
  ngOnInit(): void {

  }

  newAlumno(alumno: Alumno) {
    let newAlumno = alumno;
    alumno.id = this.alumnos.length;
    this.alumnos.push(alumno);
  }

  setearAlumnoAModificar(alumno: Alumno) {
    this.infoAlumno = alumno
    this.editarAlumnoModal.formulario.setValue({
      nombre: alumno.nombre,
      apellido: alumno.apellido,
      edad: alumno.edad,
    })

  }
  modificarAlumno(alumno: Alumno) {
    this.alumnos[alumno.id] = alumno;
    this.closeModal.nativeElement.click();
  }
}
