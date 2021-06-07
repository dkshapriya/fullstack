import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfluencerListComponent } from './influencer-list/influencer-list.component';
import { environment } from 'src/environments/environment';import { InfluencerService } from './influencer.service';
import { CreateInfluencerComponent } from './create-influencer/create-influencer.component';
import { FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    InfluencerListComponent,
    CreateInfluencerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
