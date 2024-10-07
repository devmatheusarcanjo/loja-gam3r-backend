import { Controller, Get, Param } from '@nestjs/common';
import { Produto, produtos } from 'src/core';

@Controller('produtos')
export class ProdutoController {
  @Get()
  async obterProdutos(): Promise<Produto[]> {
    return produtos;
  }

  @Get(':id')
  async obterProdutoPorId(@Param('id') idSt: string): Promise<any> {
    // const produto = produtos[id];
    const id = +idSt;
    const produto = produtos.find((e) => e.id === id);
    console.log(id);
    return produto ?? 'Produto não encontrado';
  }
}
