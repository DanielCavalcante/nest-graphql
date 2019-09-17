import { PetService } from '../services/pet.service'
import { Resolver, Args, Query } from '@nestjs/graphql'
import { Pet } from '../models/pet.model'
import { ProductArgs } from '../dtos/product-args.dto'

@Resolver(of =>  Pet)
export class PetResolver {
  constructor(private readonly service: PetService) { }

  @Query(returns => Pet)
  async Product(@Args('id') id: string): Promise<Pet> {
    const pet = await this.service.findOneById(id)
    return pet
  }

  @Query(returns => [Pet])
  async products(@Args() args: ProductArgs): Promise<Product[]> {
    return await this.service.findAll(args)
  }
}