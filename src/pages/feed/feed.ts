import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoovieProvider } from '../../providers/moovie/moovie'; // Api movie

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [ // 1° o provider responsavel pela chamada da api, pode ser registrado na pagina que vai consumir ou no arquivo global app.module.ts
    MoovieProvider
  ]
})
export class FeedPage {

  public lista_filmes = new Array<any>(); // criando um array de qualquer coisa 

  constructor(  //2° injeção de dependência no construtor
    public navCtrl: NavController,
    public navParams: NavParams,
    private movieProvider: MoovieProvider ) {
  }

  ionViewDidLoad() { // 3° chamar a rota responsavel
    this.movieProvider.getPopularMovie().subscribe(
      data=>{
        const response = (data as any);  //transformando varivel de retorno, em tipo any (qualquer coisa) ,  para o angular não fazer validação de tipagem
        const obejeto_retorno = JSON.parse(response._body); //transformando os dados de retorno da api em JSON
        this.lista_filmes = obejeto_retorno.results; 

       // console.log(this.lista_filmes);
    }, error =>{
      console.log(error);
    })
  }

}
