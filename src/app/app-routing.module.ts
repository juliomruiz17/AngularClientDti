import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CliAddComponent } from './Clientes/cli-add/cli-add.component';

const routes: Routes = [

  { path: "", component: CliAddComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
