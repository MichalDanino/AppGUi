import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './componnent/home/home.component';
import { ScrapingComponent } from './componnent/scraping/scraping.component';
import { UserComponent } from './componnent/user/user.component';
import { FeedbakeComponent } from './feedbake/feedbake.component';


const routes: Routes = [
  {path:'app-feedbake',component:FeedbakeComponent},
  {path:'app-user',component:UserComponent},
  {path:'app-scraping',component:ScrapingComponent},
  {path:'app-root', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
