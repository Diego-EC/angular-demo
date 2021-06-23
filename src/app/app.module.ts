import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { FooComponent } from './components/foo/foo.component';
import { FilmService } from './services/film.service';
import { StudentComponent } from './components/student/student.component';
import { StudentService } from './services/student.service';
import { StudentsComponent } from './components/students/students.component';

@NgModule({
  declarations: [
    AppComponent,
    FooComponent,
    StudentComponent,
    StudentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [FilmService, StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
