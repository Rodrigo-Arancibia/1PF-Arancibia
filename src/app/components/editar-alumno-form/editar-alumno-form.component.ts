import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Alumno } from 'src/app/interfaces/alumno';

@Component({
  selector: 'app-editar-alumno-form',
  templateUrl: './editar-alumno-form.component.html',
  styleUrls: ['./editar-alumno-form.component.scss']
})
export class EditarAlumnoFormComponent implements OnInit {
  @Input() alumno: Alumno | undefined;
  public formulario: FormGroup;
  @Output() editAlumno = new EventEmitter<Alumno>();

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(4)]],
      apellido: ['', [Validators.required, Validators.minLength(4)]],
      edad: ['', [Validators.required, Validators.min(10)]]
    })
  }

  ngOnInit(): void {

  }

  editarAlumno(alumno: Alumno) {
    console.log(this.formulario.get('nombre')?.errors);
    if (this.formulario.get('nombre')?.errors === null && this.formulario.get('apellido')?.errors === null && this.formulario.get('edad')?.errors === null) {
      let nuevoAlumno = this.formulario.value;
      nuevoAlumno.id = this.alumno?.id;
      this.editAlumno.emit(nuevoAlumno);
      this.formulario.reset();
    }
    else {
      console.log('Invalido');

    }
  }
}
