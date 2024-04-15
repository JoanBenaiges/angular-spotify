import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { Observable, observable, of } from 'rxjs';
import * as dataRaw from '../../../data/tracks.json'

@Injectable({
  providedIn: 'root'
})

export class TrackService {

  dataTracksTranding$: Observable<TrackModel[]> = of([])
  dataTracksRandom$: Observable<any> = of([])

  constructor() {
    const { data }: any = (dataRaw as any).default;

    this.dataTracksTranding$ = of(data)

    this.dataTracksRandom$ = new Observable((observer) => {

      const trackExample: TrackModel = {
        _id: 9,
        name: 'nombre',
        album: '',
        url: '',
        cover: ''
      }

      observer.next([trackExample])
    })
  }
}
