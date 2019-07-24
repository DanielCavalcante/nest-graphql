import { Injectable } from '@nestjs/common'
import { Product } from '../models/product.model'
import { ProductArgs } from '../dtos/product-args.dto'

@Injectable()
export class ProductService {
  async findOneById(id: string): Promise<Product> {
    return {
      id: '123',
      title: 'Product',
      description: 'Descrição'
    } as Product
  }

  async findAll(args: ProductArgs): Promise<Product[]> {
    return [
      {
        id: '123',
        title: 'Product',
        description: 'Descrição'
      }
    ] as Product[]
  }
}