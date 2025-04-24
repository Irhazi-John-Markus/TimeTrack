import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Feature2Component } from './feature2.component';

const routes: Routes = [
  { path: ' feature2', component: Feature2Component }, 
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class Feature2Module {}
