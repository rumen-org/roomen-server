import { User } from 'src/auth/entity/user.entity';
import { NotFoundException } from '@nestjs/common';
import SuccessResponse from 'src/common/utils/success.response';
import { CustomRepository } from 'src/common/configs/typeorm.decorator';
import { UpdateUserRequest } from '../dto/request/update-user.dto';
import { Repository } from 'typeorm';

@CustomRepository(User)
export class UserRepository extends Repository<User> {
  async updateUser(request: UpdateUserRequest): Promise<SuccessResponse> {
    const { userId, email, name, password, phone } = request;
    const user = await this.update(userId, {
      email,

      name,
      password,
      phone,
    });

    if (user.affected === 0) {
      throw new NotFoundException(`${userId} 이 유저는 수정할 수 없습니다.`);
    }

    return { success: true };
  }
}
