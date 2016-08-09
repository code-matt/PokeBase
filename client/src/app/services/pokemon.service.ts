import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http'


@Injectable()
export class PokemonService {
  data: any;
  constructor(private _http: Http,
              private window: Window){}

  search(term: any) {
    return this._http.get("http://" + this.window.location.host + "/api/v1/pokemons?name=" + term)
      .map(res => res.json())
  }
}
