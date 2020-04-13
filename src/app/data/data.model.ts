interface NeoApi {
  links?: { [key: string]: any };
  elementCount?: number;
  nearEarthObjects?: { [key: string]: any };
}

interface Neo {
  id: string;
  name: string;
  estimatedDiameter: number; // average of min / max; miles
  isPotentiallyHazardousAsteroid: boolean;
  relativeVelocity: number; // mph
  missDistance: number; // miles
  nickname?: string;
}

const initialNEO: Neo = {
  id: '',
  name: '',
  estimatedDiameter: null,
  isPotentiallyHazardousAsteroid: null,
  relativeVelocity: null,
  missDistance: null,
  nickname: ''
};

interface NeoNickname {
  id: string;
  nickname: string;
}

export { NeoApi, Neo, initialNEO, NeoNickname };
