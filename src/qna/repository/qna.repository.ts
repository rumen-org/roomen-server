import { CustomRepository } from 'src/common/configs/typeorm.decorator';
import { Repository } from 'typeorm';
import { Qna } from '../entity/qna.entity';

@CustomRepository(Qna)
export class QnaRepository extends Repository<Qna> {}
