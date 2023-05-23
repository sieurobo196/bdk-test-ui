import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplatesComponent } from './templates/templates.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './templates/header/header.component';
import { FooterComponent } from './templates/footer/footer.component';
import {HomeComponent} from "./templates/component/home/home.component";
import {NewsComponent} from "./templates/component/news/news.component";
import {RankComponent} from "./templates/component/rank/rank.component";
import {MatchComponent} from "./templates/component/match/match.component";
import {AnalyticComponent} from "./templates/component/analytic/analytic.component";

@NgModule({
  declarations: [
    AppComponent,
    TemplatesComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NewsComponent,
    RankComponent,
    MatchComponent,
    AnalyticComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
