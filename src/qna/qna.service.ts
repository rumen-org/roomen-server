import { Injectable } from '@nestjs/common';
import { QnaRepository } from './repository/qna.repository';
import { CreateQnaRequestDTO } from './request/create-qna.request.dto';
import SuccessResponse from 'src/common/utils/success.response';

@Injectable()
export class QnaService {
  constructor(private qnaRepository: QnaRepository) {}

  async createQna(qnaDTO: CreateQnaRequestDTO) {
    console.log('Received DTO:', qnaDTO);
    await this.qnaRepository.createQna(qnaDTO);
    return SuccessResponse.fromSuccess(true);
  }
}
