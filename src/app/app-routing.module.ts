import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateSetComponent } from './create-set/create-set.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'create-set', component: CreateSetComponent },
  { path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
