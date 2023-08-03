import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EntradaBlogComponent } from './entrada-blog/entrada-blog.component';
import { ListsModule } from './modules/lists/lists.module';

@NgModule({
  declarations: [
    AppComponent,
    EntradaBlogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //Importamos nuestro mudulo personalizado
    ListsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
