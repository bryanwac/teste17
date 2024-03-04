import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardProdutoComponent } from './card-produto/card-produto.component';
import { LoginComponent } from './login/login.component';
import { PainelNavegacaoModule } from './painel-navegacao/painel-navegacao.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    CardProdutoComponent,
    LoginComponent,
    PainelNavegacaoModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
