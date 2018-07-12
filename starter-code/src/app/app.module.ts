import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MyHomeComponent } from './my-home/my-home.component';
import { MyMovieComponent } from './my-movie/my-movie.component';
import { MoviesService } from './movies.service';

const routesArray: Routes = [
  // defines the routes in our page (URL -> component)
  // router.get("/", ...) in Express
  {path: '', component: MyHomeComponent},

  // router.get("/movie/:id", ...) in Express
  {path: 'movie/:id', component: MyMovieComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    MyHomeComponent,
    MyMovieComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routesArray)
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
