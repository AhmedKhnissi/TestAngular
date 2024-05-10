import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResidenceComponent } from './residence/residence.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { UpdateApartComponent } from './update-apart/update-apart.component';
import { AddappartmentComponent } from './addappartment/addappartment.component';
import { ShowappartComponent } from './showappart/showappart.component';
import { AhmedKhnissiAddShowrromComponent } from './ahmed-khnissi-add-showrrom/ahmed-khnissi-add-showrrom.component';
import { AhmedKhnissiComponent } from './ahmed-khnissi/ahmed-khnissi.component';
import { AhmedKhnissiShowShowrroomComponent } from './ahmed-khnissi-show-showrroom/ahmed-khnissi-show-showrroom.component';


const ROUTES:Routes=[
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"residence",component:ResidenceComponent},
  {path:"addappart",component:AddappartmentComponent},
  {path:"Formulaire",component:FormulaireComponent},
  {path:"update/:id",component:UpdateApartComponent},
  {path:"show/:id",component:ShowappartComponent},
  {path:"listshowroom",component:AhmedKhnissiComponent},
  {path:"addshowroom",component:AhmedKhnissiAddShowrromComponent},
  {path:"showroom/:id",component:AhmedKhnissiShowShowrroomComponent},
  //{path:"**",component:NotfoundComponent}
 ]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES),
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
