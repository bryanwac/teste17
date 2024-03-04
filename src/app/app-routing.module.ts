import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PainelNavegacaoComponent } from './painel-navegacao/painel-navegacao.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'painel-navegacao',
    component: PainelNavegacaoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
