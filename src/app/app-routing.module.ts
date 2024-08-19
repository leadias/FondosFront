import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { CheckComponent } from './check/check.component';
import { TableComponent } from './table/table.component';



const routes: Routes = [
  {
    path:'',
    component: CheckComponent
  },
  { path: 'pagina3', component: TableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
