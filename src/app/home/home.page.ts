import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Instalacao } from 'src/modelos/instalacao';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public instalacao: Instalacao[];
  
  constructor(private router: Router, 
    private http: HttpClient,) {

    this.http.get('http://barbosolar.com.br/instalacoes')
             .subscribe(
               (res: any) => {
                 console.log(res.conteudoResposta)
                 this.instalacao = res.conteudoResposta;                  
                },
                error => {                  
                  alert("ERROR");
                });
  }
  

  selicionaBotao(botao: string){
    this.router.navigateByUrl('/' + botao);
  }

}
