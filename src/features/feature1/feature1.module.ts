import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Feature1Component } from './feature1.component';
import { Feature1RoutingModule } from './feature1-routing.module';

@NgModule({
  imports: [
    CommonModule,
    Feature1RoutingModule,
    Feature1Component],
})
export class Feature1Module {}
