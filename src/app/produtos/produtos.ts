import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-produtos',
  imports: [FormsModule],
  templateUrl: './produtos.html',
  styleUrl: './produtos.css',
})
export class Produtos {
  
produtos: string[] = [""];
validade: string[] = [""];
indice:number=0;
produto: string = "";
data: string = "";

indiceParaEditar: number = -1;


salvar():void{

  if(this.indiceParaEditar === -1){
    this.cadastrar();
  }else{
    this.editar();
  }
  this.produtos.sort((a, b) => a.localeCompare(b));
this.data = "";
this.produto = "";

}

cadastrar(): void {
  this.produtos.push(this.produto)
  this.validade.push(this.data)
 this.indice++;
  // alert("produtos cadastrado com sucesso");
}

editar():void {
  this.produtos[this.indiceParaEditar] = this.produto;
  this.validade[this.indiceParaEditar] = this.data;


  alert("produtos atualizado com sucesso");
  this.indiceParaEditar = -1
}
apagar(produtoCliente: string):void{
  let indiceprodutoCliente = this.produtos.indexOf(produtoCliente);

  this.produtos.splice(indiceprodutoCliente,1)
  this.validade.splice(indiceprodutoCliente,1)

}

preencherCampoParaEditar(produtoCliente: string, dataCliente: string):void{

  this.indiceParaEditar = this.produtos.indexOf(produtoCliente)

  this.produto = produtoCliente;
  this.data = dataCliente;
}
}
