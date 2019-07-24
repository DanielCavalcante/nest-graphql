import { ProductService } from '../services/product.service'
import { Resolver, Args, Query } from '@nestjs/graphql'
import { Product } from '../models/product.model'
import { ProductArgs } from '../dtos/product-args.dto';

@Resolver(of =>  Product)
export class ProductResolver {
  constructor(private readonly service: ProductService) { }

  @Query(returns => Product)
  async Product(@Args('id') id: string): Promise<Product> {
    const product = await this.service.findOneById(id)
    return product
  }

  @Query(returns => [Product])
  async products(@Args() args: ProductArgs): Promise<Product[]> {
    return await this.service.findAll(args)
  }
}