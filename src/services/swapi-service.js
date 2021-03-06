export default class SwapiService {
    _apiBase = 'https://swapi.dev/api'; 
    _imageBase = 'https://starwars-visualguide.com/assets/img';
  
  getResource= async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` + 
      `, received ${res.status}`);
    }
  return await res.json();
  };
  
   getAllPeople = async () => {
    const res = await this.getResource(`/people/`);
    return res.results.map(this._tarnsformPerson);
  };
  
   getPerson= async (id) =>{
   const person = await this.getResource(`/people/${id}/`);
   return this._tarnsformPerson(person);
  };
  
  getAllPlanets = async () => {
    const res = await  this.getResource(`/planets/`);
    return res.results.map(this._transfomPlanet);
  };
  
 getPlanet = async (id) => {
    const planet = await this.getResource(`/planets/${id}/`)
    return this._transfomPlanet(planet);
  };
  
 getAllStarships = async () =>{
    const res = await  this.getResource(`/starships/`);
    return res.results.map(this._transformStarship);
  };
  
   getStarships= async (id) => {
    const starship = this.getResource(`/starships/${id}/`);
    return this._transformStarship(starship);
  };

  getPersonImage = (id) => {
    return `${this._imageBase}/characters/${id}.jpg`
  };
  getStarshipImage = (id) => {
    return `${this._imageBase}/starhips/${id}.jpg`
  };
  getPlanetImage = (id) => {
    return `${this._imageBase}/planets/${id}.jpg`
  };

  _extractId = (item) => {
const idRegExp = /\/([0-9]*)\/$/;
  return item.url.match(idRegExp)[1];
  }
  
_transfomPlanet = (planet) => {
return {
  id: this._extractId(planet),
        name: planet.name,
        population: planet.population,
        rotationPeriod: planet.rotation_period,
        diameter: planet.diameter
};
};
_transformStarship = (starship) => {
  return {
    id:this._extractId(starship),
    name: starship.name,
    model: starship.model,
    manufacturer: starship.manufacturer,
    constInCredits: starship.constInCredits,
    length: starship.length,
    crew: starship.crew,
    passengers: starship.passengers,
    cargoCapacity: starship.cargoCapacity
  }
}

_tarnsformPerson = (person) => {
  return{
        id:this._extractId(person),
        name: person.name,
        gender:person.gender,
        birthYear:person.birth_year,
        eyeColor:person.eye_color

  }
}
  
  }
  // const swapi = new SwapiService();
  //alle peopele
  // swapi.getAllPeople().then((body) => {
  //   console.log(body);
  // swapi.getAllPeople().then((people) => {
  //   people.forEach((p) => {
  //     console.log(p.name)
  //   })
  // });
  // swapi.getAllPerson(3).then((p)=>{
  //   console.log(p.name);
  // });
  
  // fetch('https://swapi.co/api/people/1/')
  // .then((res) => {
  // return res.json();
  // })
  // .then((body) => {
  //   console.log(body);
  // });
  