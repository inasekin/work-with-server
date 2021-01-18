export default class SwapiService {

    _apiBase = 'https://swapi.dev/api';
  
    getResource = async (url) => {
      const res = await fetch(`${this._apiBase}${url}`);
  
      if (!res.ok) {
        throw new Error(`Could not fetch ${url}` + `, received ${res.status}`)
      }
  
      return await res.json();
    }
  
    getAllPeople = async () => {
      const res = await this.getResource(`/people/`);
      return res.results.map(this._transformItem);
    }
  
    getItem = async (id) => {
      const item = await this.getResource(`/people/${id}/`);
      return this._transformItem(item);
    }
  
    getAllPlanets = async () => {
      const res = await this.getResource(`/planets/`);
      return res.results.map(this._transformPlanet);
    }
  
    getPlanet = async (id) => {
      const planet = await this.getResource(`/planets/${id}/`);
      return this._transformPlanet(planet);
    }
  
    getAllStarships = async () => {
      const res = await this.getResource(`/starships/`);
      return res.results.map(this._transformStarship);
    }
  
    getStarship = async (id) => {
      const starship = this.getResource(`/starships/${id}/`);
      return this._transformStarship(starship);
    }

    _extractId = (item) => {
      const idRegExp = /\/([0-9]*)\/$/;
      return item.url.match(idRegExp)[1];
    }

    _transformPlanet = (planet) => {
      return {
          id: this._extractId(planet),
          name: planet.name,
          population: planet.population,
          rotationPeriod: planet.rotation_period,
          diameter: planet.diameter
      }
    }

    _transformStarship = (starship) => {
      return {
          id: this._extractId(starship),
          name: starship.name,
          manufacturer: starship.manufacturer,
          costInCredits: starship.costInCredits,
          crew: starship.crew,
          length: starship.length,
          passengers: starship.passengers,
          cargoCapacity: starship.cargoCapacity
      }
    }

    _transformItem = (item) => {
      return {
          id: this._extractId(item),
          name: item.name,
          gender: item.gender,
          eye_color: item.eye_color,
          height: item.height
      }
    }
  }//асинхронный источник данных
  
  
  // swapi.getAllPeople().then((people) => {
  //   people.forEach(p => {
  //     console.log(p.name);
  //   });
  // });
  
  // swapi.getAllPeople().then((body) => {
  //     console.log(body);
  // })
  
  // const getResource = async (url) => {
  //   const res = await fetch(url);
  //   if (!res.ok) {
  //     throw new Error(`Could not fetch ${url}` + `, received ${res.status}`)
  //   }
  //   const body = await res.json();
  //   return body;
  // }
  
  // getResource('https://swapi.dev/api/people/1/')
  //   .then((body) => {
  //     console.log(body);
  //   })
  //   .catch((err) => {
  //     console.error('Could not fetch', err);
  //   });
  
  