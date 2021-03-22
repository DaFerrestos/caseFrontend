import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { UserComponent } from './componentes/user/user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { RepositoriosComponent } from './componentes/repositorios/repositorios.component';
import { DestacadosComponent } from './componentes/destacados/destacados.component';





@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RepositoriosComponent,
    DestacadosComponent

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatIconModule,
    MatDialogModule

  ],


  providers: [HttpClient, UserComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
