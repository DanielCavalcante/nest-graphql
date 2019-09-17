import { Field, ID, ObjectType } from 'type-graphql'

@ObjectType()
export class Pet {
  @Field(type => ID)
  id: string

  @Field()
  name: string

  @Field({ nullable: true })
  breed?: string

  @Field({ nullable: true })
  age?: number

  @Field({ nullable: true })
  description?: string
}