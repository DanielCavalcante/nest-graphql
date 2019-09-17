import { Injectable } from '@nestjs/common'
import { Pet } from '../models/pet.model'
import { ProductArgs } from '../dtos/product-args.dto'

@Injectable()
export class PetService {
  async findOneById(id: string): Promise<Pet> {
    return {
      id: '123',
      name: 'Max',
      breed: 'Labrador',
      age: 2,
      description: 'Mom`s Dog'
    } as Pet
  }

  async findAll(args: ProductArgs): Promise<Pet[]> {
    return [
      {
        id: '123',
        name: 'Max',
        breed: 'Labrador',
        age: 2,
        description: 'Mom`s Dog'
      }
    ] as Pet[]
  }
}