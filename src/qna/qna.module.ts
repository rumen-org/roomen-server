import { Module } from '@nestjs/common';
import { QnaController } from './qna.controller';
import { QnaService } from './qna.service';
import { TypeOrmExModule } from 'src/common/configs/typorm.module';
import { QnaRepository } from './repository/qna.repository';

@Module({
  imports: [TypeOrmExModule.forCustomRepository([QnaRepository])],
  controllers: [QnaController],
  providers: [QnaService],
})
export class QnaModule {}
