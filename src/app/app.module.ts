import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { PetListComponent } from './pet-list/pet-list.component';
import { PetInicioComponent } from './pet-inicio/pet-inicio.component';
import { PetAddComponent } from './pet-add/pet-add.component';
import { PetDetailsComponent } from './pet-details/pet-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PetListComponent,
    PetInicioComponent,
    PetAddComponent,
    PetDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
