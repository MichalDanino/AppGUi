import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import {CdkTableModule} from '@angular/cdk/table';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './componnent/user/user.component';
import { ScrapingComponent } from './componnent/scraping/scraping.component';
import { PopupComponent } from './componnent/popup/popup.component';
import { PopUpMaterialComponent } from './pop-up-material/pop-up-material.component';
import { FeedbakeComponent } from './feedbake/feedbake.component';
import { ArticalComponent } from './componnent/artical/artical.component';
import { MaterialComponent } from './componnent/material/material.component';
import { CategoryComponent } from './componnent/category/category.component';
import { WorkerComponent } from './componnent/worker/worker.component';
import { LoginComponent } from './componnent/login/login.component';
import { HomeComponent } from './componnent/home/home.component';
import {MatInputModule} from '@angular/material/input';
import { NgwWowModule } from 'ngx-wow';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ScrapingComponent,
    PopupComponent,
    PopUpMaterialComponent,
    FeedbakeComponent,
    ArticalComponent,
    MaterialComponent,
    CategoryComponent,
    WorkerComponent,
    LoginComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    CdkTableModule,
    MatInputModule,
    NgwWowModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
