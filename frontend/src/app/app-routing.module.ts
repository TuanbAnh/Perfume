import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoadingComponent } from './components/loading/loading.component';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { MaleComponent } from './components/male/male.component';
import { FemaleComponent } from './components/female/female.component';
import { OriginComponent } from './components/origin/origin.component';
import { AddComponent } from './components/add/add.component';
import { LsitComponent } from './components/lsit/lsit.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  { path: '', component: LoadingComponent },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: 'Product', pathMatch: 'full' },
      { path: 'Product', component: ProductComponent },
      { path: 'Male', component: MaleComponent },
      { path: 'Female', component: FemaleComponent },
      { path: 'Origin', component: OriginComponent },
      { path: 'Add', component: AddComponent },
      { path: 'List', component: LsitComponent },
      { path: 'Search', component: SearchComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
