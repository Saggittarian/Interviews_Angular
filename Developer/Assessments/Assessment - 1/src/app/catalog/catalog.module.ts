import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter/counter.component';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';


@NgModule({
  declarations: [
        CounterComponent,
        DetailsComponent
        
  ],
  exports:[
          ],
  imports: [
    CommonModule
  ]
})
export class CatalogModule { }
