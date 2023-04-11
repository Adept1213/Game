import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TetrisComponent } from './pages/tetris/tetris.component';
import { ShapeLComponent } from './components/shape-l/shape-l.component';
import { ShapeZComponent } from './components/shape-z/shape-z.component';
import { ShapeIComponent } from './components/shape-i/shape-i.component';
import { ShapeJComponent } from './components/shape-j/shape-j.component';
import { ShapeOComponent } from './components/shape-o/shape-o.component';
import { ShapeSComponent } from './components/shape-s/shape-s.component';
import { ShapeTComponent } from './components/shape-t/shape-t.component';
import { SnakeComponent } from './pages/snake/snake.component';
import { PairsComponent } from './pages/pairs/pairs.component';
import { MainComponent } from './pages/main/main.component';
import { TetrisFieldComponent } from './components/tetris-field/tetris-field.component';

@NgModule({
  declarations: [
    AppComponent,
    TetrisComponent,
    ShapeLComponent,
    ShapeZComponent,
    ShapeIComponent,
    ShapeJComponent,
    ShapeOComponent,
    ShapeSComponent,
    ShapeTComponent,
    SnakeComponent,
    PairsComponent,
    MainComponent,
    TetrisFieldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
