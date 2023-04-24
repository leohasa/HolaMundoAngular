import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EstudianteComponent } from './estudiante/estudiante.component';
import { EntryFileComponent } from './entry-file/entry-file.component';
import { EntryFileContentComponent } from './entry-file-content/entry-file-content.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EstudianteComponent,
    EntryFileComponent,
    EntryFileContentComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
