import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlipbookComponent } from './components/flipbook/flipbook.component';

const routes: Routes = [
  {
    path: 'flipbook', component: FlipbookComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
