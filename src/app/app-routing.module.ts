import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BarUseComponent } from './pages/bar-use/bar-use.component';
import { BarSimpleTextComponent } from './pages/bar-simple-text/bar-simple-text.component';

const routes: Routes = [
  {path: 'bar', component: BarUseComponent },
  {path: 'simple', component: BarSimpleTextComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
