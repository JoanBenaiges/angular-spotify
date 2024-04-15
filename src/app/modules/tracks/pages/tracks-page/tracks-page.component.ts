import { Component, OnInit } from '@angular/core';
import * as dataRaw from '../../../../data/tracks.json'
import { TrackModel } from '@core/models/tracks.model';
import { TrackService } from '@modules/tracks/services/track.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit {

  tracksTrending: Array<TrackModel> = [

  ]

  tracksRandim: Array<TrackModel> = [
  ]

  listObservers$: Array<Subscription> = []

  constructor(private trackService: TrackService) { }

  ngOnInit(): void {

    const observer1$ = this.trackService.dataTracksTranding$
      .subscribe(response => {
        this.tracksTrending = response

      })

    const observer2$ = this.trackService.dataTracksRandom$
      .subscribe(response => {


      })

    this.listObservers$ = [observer1$, observer2$]

  }

  ngOnDestroy(): void {
    this.listObservers$.forEach(u => u.unsubscribe())
  }

}
