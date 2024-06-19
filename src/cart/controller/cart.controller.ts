import { Body, Controller, Param, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiHeader } from '@nestjs/swagger';
import SuccessResponse from 'src/common/utils/success.response';
import { PatchApi, PostApi } from 'src/common/decorator/api.decorator';
import { CartService } from '../service/cart.service';
import { UpdateCartDto } from '../dto/update-cart.dto';
import { AuthGuard } from '@nestjs/passport';
import { Cart } from 'src/cart/entity/cart.entity';

@ApiTags('cart')
@Controller('cart')
export class CartController {
  constructor(private cartService: CartService) {}

  @PostApi(() => Cart, {
    path: '/:userId/add',
    description: '장바구니에 담기. , 파라미터는 userId',
    auth: true,
  })
  @ApiHeader({
    name: 'Authorization',
    description: 'Bearer access-token, 로그인에서 발급 받은 뒤에 사용하세요!',
    required: true,
    example:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNzE1ODI1MjYwLCJleHAiOjE3MTU4NDMyNjB9.Ie4kanAi87dOU',
  })
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({
    summary: '장바구니에 물품을 담는다.',
    description: '장바구니에 물품을 담는다.',
  })
  async addToCart(
    @Param('userId') userId: string,
    @Body('productId') productId: number,
    @Body('quantity') quantity: number,
  ): Promise<Cart> {
    return this.cartService.addToCart(userId, productId, quantity);
  }

  @PatchApi(() => UpdateCartDto, {
    path: '/modify/:id',
    description: '장바구니 정보 수정 , 파라미터는 userId',
    auth: true,
  })
  updateCart(
    @Param() userId: string,
    @Body() request: UpdateCartDto,
  ): Promise<SuccessResponse> {
    //TODO : accessTOken type설정
    console.log(request, '업데이트를 한다 ..');
    return this.cartService.changeOption(userId, request);
  }
}
