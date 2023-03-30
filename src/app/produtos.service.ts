import { Injectable } from '@angular/core';
import { IProduto, produtos } from './produtos';

@Injectable({
  providedIn: 'root',
})
export class ProdutosService {
  produtos: IProduto[] = produtos;

  constructor() {}

  getAll() {
    return this.produtos;
  }

  getOne(produtoId: number): IProduto | undefined {
    // Vai retornar apenas o produto que contém um ID específico
    return this.produtos.find((produto) => produto.id === produtoId);
  }
}
