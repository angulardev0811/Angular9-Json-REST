import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './component/main/main.component';
import { DetailComponent } from './component/detail/detail.component';


const routes: Routes = [
    {path: '', redirectTo: '/', pathMatch: 'full' },
    { path: '', component: MainComponent },
    { path: 'detail/:id', component: DetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
