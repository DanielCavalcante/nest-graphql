import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { User } from '../entities/user.entity'
import { CreateUserDto } from '../dtos/create-user.dto'

@Injectable()
export class UserService {

  constructor(@InjectRepository(User)
    private readonly repository: Repository<User>
  ) {}

  async findById(id): Promise<User> {
    return await this.repository.findOne({ id })
  }

  async create(user: User) {
    return await this.repository.save(user)
  }

  async authenticate(dto: CreateUserDto) {
    if (!dto)
      return 'Informe as credenciais'
    const user = await this.repository.findOne({ email: dto.email, password: dto.password })
    if (user) 
      return user
    return 'Por favor, verifique suas credenciais!'
  }

}
