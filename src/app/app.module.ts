import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { FooComponent } from './components/foo/foo.component';
import { FilmService } from './services/film.service';
import { StudentComponent } from './components/student/student.component';
import { StudentService } from './services/student.service';
import { StudentsComponent } from './components/students/students.component';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    FooComponent,
    StudentComponent,
    StudentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FlexLayoutModule
  ],
  providers: [FilmService, StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
