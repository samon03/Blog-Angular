import { Routes } from '@angular/router';

import { AboutComponent } from '../about/about.component';
import { ArticleComponent } from '../article/article.component';
import { HomeComponent } from '../home/home.component';

export const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'article', component: ArticleComponent },
  { path: 'about', component: AboutComponent },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: ':key', component: ArticleComponent }

];
