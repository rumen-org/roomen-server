import { CustomRepository } from 'src/common/configs/typeorm.decorator';
import { Repository } from 'typeorm';
import { Qna } from '../entity/qna.entity';
import { CreateQnaRequestDTO } from '../request/create-qna.request.dto';

@CustomRepository(Qna)
export class QnaRepository extends Repository<Qna> {
  async createQna(qnaDTO: CreateQnaRequestDTO): Promise<Qna> {
    const { category, image, title, secret, content } = qnaDTO;
    const qna = this.create({ category, image, title, secret, content });
    await this.save(qna);

    return qna;
  }
}
