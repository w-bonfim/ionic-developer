import { Injectable } from '@angular/core';
import { Http } from '@angular/http'; //importante esse pacote sem ele não funciona
import { Observable } from 'rxjs/Observable';


/*
  Generated class for the MoovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MoovieProvider {

  private baseApiPath = "https://api.themoviedb.org/3";
  private key = ""; //não esquecer de deixar em branco quando subir no github e coloca no readme informando que é necessario fazer o cadastro e gerar essa chave

  constructor(public http: Http) {
    console.log('Hello MoovieProvider Provider');
  }

  getLaterMovies() {
    return this.http.get(this.baseApiPath + "/movie/latest?api_key="+this.key);
  }

  getPopularMovie(){
    return this.http.get(this.baseApiPath + "/movie/popular?api_key="+this.key);
  }
}
