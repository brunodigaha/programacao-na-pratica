import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CursoInglesComponent } from './curso-ingles/curso-ingles.component';
import { ListaCursosComponent } from './lista-cursos/lista-cursos.component';


const routes: Routes = [
  { path: 'curso-ingles', component: CursoInglesComponent },
  { path: 'lista', component: ListaCursosComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
