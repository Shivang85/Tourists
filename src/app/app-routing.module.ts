import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTouristComponent } from './create-tourist/create-tourist.component';
import { HomeComponent } from './home/home.component';
import { TouristListComponent } from './tourist-list/tourist-list.component';

const routes: Routes = [
  {path: 'tourists', component: TouristListComponent},
  {path: "create-tourist", component: CreateTouristComponent},
  {path: "home", component:HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }