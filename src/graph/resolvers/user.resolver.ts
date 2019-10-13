import { Query, Resolver, Args } from '@nestjs/graphql';
import { UserService } from '../services/user.service';
import { User } from '../entities/user.entity';

@Resolver(of => User)
export class UserResolver {
  constructor(private readonly service: UserService) {}

  @Query(() => User)
  public async findUser(@Args('id') id: number) {
    return await this.service.findById(id);
  }
  
}
