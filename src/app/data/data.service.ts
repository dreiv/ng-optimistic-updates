import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, NavigationEnd } from '@angular/router';
import { environment } from './../../environments/environment';

import { Observable, throwError, timer, defer } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';

import { Neo, NeoApi } from './data.model';

import { State } from './state';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class DataService extends State {
  private apNeoUrl = `https://api.nasa.gov/neo/rest/v1/feed?detailed=false&start_date=${this.utils.getNEODate}&end_date=${this.utils.getNEODate}&api_key=${environment.nasaApiKey}`;
  loading = true;

  constructor(
    private http: HttpClient,
    private utils: UtilsService,
    private router: Router
  ) {
    super();
    // Clear any state errors on navigation event
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.dismissError();
      }
    });
  }

  neoData$(): Observable<Neo[]> {
    return this.http.get<NeoApi>(this.apNeoUrl).pipe(
      map((res) => this.utils.mapNEOResponse(res)),
      tap((neoList) => {
        this.setNeoStore(neoList);
        this.loading = false;
      }),
      catchError((err) => this.onError(err))
    );
  }

  update$(neo: Neo): Observable<Neo> {
    // This section is fabricated to simulate
    // an interaction with an API
    return defer(() => {
      // Deferred so that the observable will
      // only be created on subscription
      // Make optimistic UI updates
      this.updateNeo(neo);
      // Return the observable that "interacts with the server"
      return timer(2500).pipe(
        map(() => {
          if (neo.estimatedDiameter <= 0.2) {
            throw new Error(`Could not update ${neo.name}.`);
          }
          return neo;
        }),
        catchError((err) => this.onError(err))
      );
    });
  }

  private onError(err: any): Observable<never> {
    const errorMsg = err.message ? err.message : 'Unable to complete request.';
    this.loading = false;
    this.stateError(errorMsg);

    return throwError(errorMsg);
  }
}
