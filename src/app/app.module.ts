import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WomanComponent } from './woman/woman.component';
import { WomandetailComponent } from './woman/womandetail/womandetail.component';
import { WomanlistComponent } from './woman/womanlist/womanlist.component';
import { ManComponent } from './man/man.component';
import { MandetailComponent } from './man/mandetail/mandetail.component';
import { ManlistComponent } from './man/manlist/manlist.component';
import { ManitemComponent } from './man/manlist/manitem/manitem.component';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { ShoppingeditComponent } from './shoppinglist/shoppingedit/shoppingedit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WomanComponent,
    WomandetailComponent,
    WomanlistComponent,
    ManComponent,
    MandetailComponent,
    ManlistComponent,
    ManitemComponent,
    ShoppinglistComponent,
    ShoppingeditComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
