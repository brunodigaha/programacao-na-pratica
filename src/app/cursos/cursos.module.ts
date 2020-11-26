import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursoInglesComponent } from './curso-ingles/curso-ingles.component';

import {MatCardModule} from '@angular/material/card';
import { ListaCursosComponent } from './lista-cursos/lista-cursos.component';
import {MatGridListModule} from '@angular/material/grid-list';


@NgModule({
  declarations: [CursoInglesComponent, ListaCursosComponent],
  imports: [
    CommonModule,
    CursosRoutingModule,
    MatCardModule,
    MatGridListModule
  ]
})
export class CursosModule { }
