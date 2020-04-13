import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ErrorComponent } from './error/error.component';
import { LoadingComponent } from './loading/loading.component';
import { NeoComponent } from './neo/neo.component';
import { NeoFormComponent } from './neo/neo-form/neo-form.component';

@NgModule({
  declarations: [
    ErrorComponent,
    LoadingComponent,
    NeoComponent,
    NeoFormComponent
  ],
  imports: [CommonModule, FormsModule],
  exports: [ErrorComponent, LoadingComponent, NeoComponent]
})
export class SharedModule {}
