import { Module } from '@nestjs/common'
import { PetService } from './services/pet.service'
import { PetResolver } from './resolvers/pet.resolver'

@Module({})
export class GraphModule {
  providers: [PetService, PetResolver]
}
