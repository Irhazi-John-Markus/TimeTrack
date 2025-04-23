import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Feature2Component } from './feature2.component';
import { Feature2DetailsComponent } from './feature2-details.component';

const routes: Routes = [
  {
    path: 'feature2',
    component: Feature2Component,
  },
  {
    path: 'details',
    component: Feature2DetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Feature2RoutingModule {}
