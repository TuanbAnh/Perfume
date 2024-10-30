import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';
import { FormsModule } from '@angular/forms';

import { AddComponent } from './components/add/add.component';
import { FemaleComponent } from './components/female/female.component';
import { HomeComponent } from './components/home/home.component';
import { LoadingComponent } from './components/loading/loading.component';
import { LsitComponent } from './components/lsit/lsit.component';
import { MaleComponent } from './components/male/male.component';
import { OriginComponent } from './components/origin/origin.component';
import { ProductComponent } from './components/product/product.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent,
    HomeComponent,
    ProductComponent,
    MaleComponent,
    FemaleComponent,
    OriginComponent,
    AddComponent,
    LsitComponent,
    SearchComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
