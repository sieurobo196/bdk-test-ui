import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TemplatesComponent} from "./templates/templates.component";
import {HomeComponent} from "./templates/component/home/home.component";
import {NewsComponent} from "./templates/component/news/news.component";
import {RankComponent} from "./templates/component/rank/rank.component";
import {MatchComponent} from "./templates/component/match/match.component";
import {AnalyticComponent} from "./templates/component/analytic/analytic.component";

const routes: Routes = [
  {path: 'template', component: TemplatesComponent},
  {path: 'trang-chu', component: HomeComponent},
  {path: 'tin-tuc', component: NewsComponent},
  {path: 'bang-xep-hang', component: RankComponent},
  {path: 'tran-dau', component: MatchComponent},
  {path: 'thong-so', component: AnalyticComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
