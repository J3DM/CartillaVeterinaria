import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PetListComponent} from './pet-list/pet-list.component'
import {PetInicioComponent} from './pet-inicio/pet-inicio.component'
import { PetAddComponent } from './pet-add/pet-add.component';
import { PetDetailsComponent } from './pet-details/pet-details.component';
import { UserLoginComponent } from './user-login/user-login.component'


const routes: Routes = [
  {path:'',component:PetInicioComponent},
  {path:'pets',component:PetListComponent},
  {path:'add',component:PetAddComponent},
  {path:'pet/:_id',component:PetDetailsComponent},
  {path:'login',component:UserLoginComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
