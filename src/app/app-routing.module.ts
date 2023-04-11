import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { TetrisComponent } from './pages/tetris/tetris.component';

const routes: Routes = [
  { path: '', component: MainComponent},
  { path: 'tetris', component: TetrisComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
