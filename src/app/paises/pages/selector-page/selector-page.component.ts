import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaisesService } from '../../services/paises.service';
import { PaisSmall } from '../../interfaces/paises.interface';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styles: [
  ]
})
export class SelectorPageComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group ({
    region: ['', Validators.required],
    pais: ['', Validators.required]
  })

  regiones: string[] = [];
  paises: PaisSmall[] = [];

  constructor(private fb: FormBuilder, private paisesSvc: PaisesService) { }

  ngOnInit(): void {
    this.regiones = this.paisesSvc.regiones;
    this.miFormulario.get('region')?.valueChanges.subscribe( region => {
      this.paisesSvc.getPaisesPorRegion(region).subscribe( paises => {
        this.paises = paises;                
      })
    })
  }

  guardar() {
    console.log(this.miFormulario.valid)
  }

}
