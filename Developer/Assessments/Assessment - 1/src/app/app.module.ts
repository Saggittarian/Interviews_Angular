import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CatalogModule } from './catalog/catalog.module';
import { MembershipModule } from './membership/membership.module';


@NgModule({
  declarations: [
    AppComponent 
  ],
  imports: [
    BrowserModule,
    CatalogModule,
    MembershipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
