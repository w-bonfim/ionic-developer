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
  providers: [ // 1° o provider responsavel pela chamada da api
    MoovieProvider
  ]
})
export class FeedPage {

  public objeto_feed = {
    titulo: "Charles Franca do Codigo",
    data: "November 5, 1955",
    descricao: "Estou criando um app incrivel...",
    qntd_likes: 12,
    qntd_coments: 4,
    time_coments: "11h ago"
  }
  public nome_usuario: string = "Charles Franca do Codigo";

  constructor(  //2° injeção de dependência no construtor
    public navCtrl: NavController,
    public navParams: NavParams,
    private movieProvider: MoovieProvider ) {
  }

  public somaDoisnumeros(num1:number, num2:number): void{  //função do tipo void não tem retorno
    var numero = num1 + num2;
    alert(numero)
  }


  ionViewDidLoad() { // 3° chamar a rota responsavel
    this.movieProvider.getPopularMovie().subscribe(
      data=>{
        const response = (data as any);  //transformando varivel de retorno, em tipo any (qualquer coisa) ,  para o angular não fazer validação de tipagem
        const obejeto_retorno = JSON.parse(response._body);
        console.log(obejeto_retorno); 
    }, error =>{
      console.log(error);
    })
  }

}
