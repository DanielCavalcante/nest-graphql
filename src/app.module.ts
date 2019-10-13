import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller'
import { GraphQLModule } from '@nestjs/graphql'
import { AppService } from './app.service'
import { GraphModule } from './graph/graph.module'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      port: 5432,
      host: 'localhost',
      username: 'postgres',
      password: 'root@123',
      database: 'nestjs_graphql',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true
    }),
    GraphQLModule.forRoot({
      debug: false,
      playground: true,
      installSubscriptionHandlers: true,
      autoSchemaFile: 'schema.gql',
    }),
    GraphModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
