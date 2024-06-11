import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './demo.component';
import { DemoBindingsComponent } from './demo-bindings/demo-bindings.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { DemoPipeComponent } from './demo-pipe/demo-pipe.component';
import { DemoDirectivesComponent } from './demo-directives/demo-directives.component';


@NgModule({
  declarations: [
    DemoComponent,
    DemoBindingsComponent,
    DemoPipeComponent,
    DemoDirectivesComponent
  ],
  imports: [
    CommonModule,
    DemoRoutingModule,
    SharedModule
  ]
})
export class DemoModule { }
