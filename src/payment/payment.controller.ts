import { Controller } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PostApi } from 'src/common/decorator/api.decorator';

@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  //빈 오브젝트에는 payment dto가 들어감.
  @PostApi(() => {}, {
    path: '/create',
    description: '결제 생성',
    auth: true,
  })
  createPayments() {
    console.log('결제 생성');
  }
}
