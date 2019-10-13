import { ArgsType, Field, Int } from 'type-graphql'

@ArgsType()
export class CreateUserDto {
  @Field(type => String)
  email: string

  @Field(type => String)
  password: string
}