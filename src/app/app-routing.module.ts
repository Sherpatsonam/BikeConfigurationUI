import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BikeConfigsComponent } from './BikeConfig/bikeConfigs.component';
import { MtbComponent } from './mountainBikes/mtb.component';

const routes: Routes = [
  {path:'home',component: HomeComponent},
  {path:'bkConfig/:id',component: BikeConfigsComponent},
  {path:'mtb',component:  MtbComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'**',redirectTo:'home',pathMatch:'full'},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
