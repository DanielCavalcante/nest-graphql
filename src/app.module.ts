import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { GraphQLModule } from '@nestjs/graphql'
import { AppService } from './app.service'
import { GraphModule } from './graph/graph.module'

@Module({
  imports: [
    GraphQLModule.forRoot({
      // debug: false,
      // playground: false,
      installSubscriptionHandlers: true,
      autoSchemaFile: 'schema.gql'
    }),
    GraphModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
