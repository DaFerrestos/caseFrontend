import { UserComponent } from './componentes/user/user.component';
import { DestacadosComponent } from './componentes/destacados/destacados.component';
import { RepositoriosComponent } from './componentes/repositorios/repositorios.component';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: UserComponent},
  {path: 'repositorios', component: RepositoriosComponent},
  {path: 'destacados', component: DestacadosComponent}
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
