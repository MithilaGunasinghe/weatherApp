import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './pages/details/details.component';
import { ListComponent } from './pages/list/list.component';

const routes: Routes = [{
  path: '',
  component: ListComponent,
  pathMatch: 'full'
}, {
  path: ':id',
  component: DetailsComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
