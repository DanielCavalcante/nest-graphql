import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('users')
export class User {

  @PrimaryGeneratedColumn()
  id: number

  @Column({ nullable: false })
  email: string

  @Column({ nullable: false })
  password: string

  @Column()
  active: boolean

  @Column({ name: "created_at", default: new Date })
  createdAt: Date

}
