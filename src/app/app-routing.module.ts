import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateInfluencerComponent } from './create-influencer/create-influencer.component';
import { InfluencerListComponent } from './influencer-list/influencer-list.component';

const routes: Routes = [
  {path: 'influencers', component: InfluencerListComponent},
  {path: 'create-influencer', component: CreateInfluencerComponent},
  {path: '', redirectTo: 'influencers', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
