import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit {

  mockCover: TrackModel = {
    cover: 'Imagen',
    name: 'SONG',
    album: 'ALBUM',
    url: '...',
    _id: 1
  }

  listObserver$: Array<Subscription> = []

  constructor(private multimediaService: MultimediaService) { }

  ngOnInit(): void {
    const observer1$ = this.multimediaService.callback.subscribe(
      (response: TrackModel) => {
        console.log('recibiendo cancion', response)
      }
    )
    this.listObserver$ = [observer1$]
  }

  ngDestroy(): void {
    this.listObserver$.forEach(u => u.unsubscribe)

  }

}
