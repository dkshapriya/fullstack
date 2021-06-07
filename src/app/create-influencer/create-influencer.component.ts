import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Influencer } from '../influencer';
import { InfluencerListComponent } from '../influencer-list/influencer-list.component';
import { InfluencerService } from '../influencer.service';

@Component({
  selector: 'app-create-influencer',
  templateUrl: './create-influencer.component.html',
  styleUrls: ['./create-influencer.component.css']
})
export class CreateInfluencerComponent implements OnInit {

  influencer: Influencer = new Influencer();
  constructor(private influencerService: InfluencerService,
    private router: Router){ }

  ngOnInit(): void {
  }

  saveInfluencer(){
    this.influencerService.createInfluencer(this.influencer).subscribe( data =>{
      console.log(data);
      this.goToInflunecerList();
    },
    error  => console.log(error));
    
  }

  goToInflunecerList(){
    this.router.navigate(['/influencers']); 

  }
  onSubmit(){
    console.log(this.influencer);
    this.saveInfluencer();

  }

}
