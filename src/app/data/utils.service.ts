import { Injectable } from '@angular/core';
import { Neo, NeoApi, initialNEO } from './data.model';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  constructor(private datePipe: DatePipe) {}

  get getNEODate(): string {
    const today = new Date();
    return this.datePipe.transform(today, 'yyyy-MM-dd');
  }

  private mapNEObj(fullNeo: { [key: string]: any }): Neo {
    const neo: Neo = initialNEO;

    Object.keys(fullNeo).forEach((key) => {
      switch (key) {
        case 'id':
          neo.id = fullNeo[key];
          break;
        case 'name':
          neo.name = fullNeo[key];
          break;
        case 'estimated_diameter':
          const estD =
            (fullNeo[key].miles.estimated_diameter_min +
              fullNeo[key].miles.estimated_diameter_max) /
            2;
          neo.estimatedDiameter = estD;
          break;
        case 'is_potentially_hazardous_asteroid':
          neo.isPotentiallyHazardousAsteroid = fullNeo[key];
          break;
        case 'close_approach_data':
          neo.relativeVelocity = Math.round(
            fullNeo[key][0].relative_velocity.miles_per_hour
          );
          neo.missDistance = fullNeo[key][0].miss_distance.miles;
          break;
        case 'id':
          break;

        default:
          break;
      }
    });

    return { ...neo };
  }

  // Take API data and produce an array of simplified NEOs
  mapNEOResponse(neoData: NeoApi): Neo[] {
    const neoList = neoData.nearEarthObjects[this.getNEODate];
    return neoList.map((neo) => this.mapNEObj(neo));
  }

  trackByID(_, item): any {
    return item.id;
  }
}
