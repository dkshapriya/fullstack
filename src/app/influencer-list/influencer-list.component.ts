import { Component, OnInit } from '@angular/core';
import { Influencer } from '../influencer';
import { InfluencerService } from '../influencer.service';

@Component({
  selector: 'app-influencer-list',
  templateUrl: './influencer-list.component.html',
  styleUrls: ['./influencer-list.component.css']
})
export class InfluencerListComponent implements OnInit {

  influencers: Influencer[];


  constructor(private influencerService: InfluencerService) { }

  ngOnInit(): void {
    this.getInfluencers();
  }

  private getInfluencers(){
    this.influencerService.getInfluencersList().subscribe(data => {
      this.influencers = data;

    });
  }

}
