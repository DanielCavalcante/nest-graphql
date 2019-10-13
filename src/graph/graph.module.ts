import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from './entities/user.entity'
import { UserService } from './services/user.service'
import { UserResolver } from './resolvers/user.resolver'
import { UserController } from './controllers/user.controller'

@Module({
  imports: [
    TypeOrmModule.forFeature(
      [
        User
      ]
    )
  ],
  providers: [
    UserResolver,
    UserService
  ],
  controllers: [
    UserController
  ]
})
export class GraphModule {}
