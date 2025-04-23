import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Feature2Component } from './feature2.component';
import { Feature2RoutingModule } from './feature2-routing.module';

@NgModule({
  imports: [CommonModule, Feature2RoutingModule, Feature2Component],
})
export class Feature2Module {}
