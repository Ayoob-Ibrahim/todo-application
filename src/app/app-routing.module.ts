import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataManipulationComponent } from './todo-components/data-manipulation/data-manipulation.component';
import { LandingPageComponent } from './todo-components/landing-page/landing-page.component';

const routes: Routes = [
  { path: "", component: LandingPageComponent },
  { path: "land", component: LandingPageComponent },
  { path: "data", component: DataManipulationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
