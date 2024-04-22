import { Body, Controller, Param } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import SuccessResponse from 'src/common/utils/success.response';
import { PatchApi, PostApi } from 'src/common/decorator/api.decorator';
import { CartService } from '../service/cart.service';
import { Cart } from '../dto/cart.dto';
import { AddCartDto } from '../dto/add-cart.dto';
import { UpdateCartDto } from '../dto/update-cart.dto';

@ApiTags('cart')
@Controller('cart')
export class CartController {
  constructor(private cartService: CartService) {}

  @PostApi(() => Cart, {
    path: '/:id',
    description: '장바구니에 담기. , 파라미터는 userId',
    auth: true,
  })
  @ApiOperation({
    summary: '장바구니에 물품을 담는다.',
    description: '장바구니에 물품을 담는다.',
  })
  async addToCart(
    @Param() id: number,
    @Body() cartDto: AddCartDto,
  ): Promise<SuccessResponse> {
    return this.cartService.addToCart(id, cartDto);
  }

  @PatchApi(() => UpdateCartDto, {
    path: '/modify/:id',
    description: '장바구니 정보 수정 , 파라미터는 userId',
    auth: true,
  })
  updateCart(
    @Param() id: number,
    @Body() request: UpdateCartDto,
  ): Promise<SuccessResponse> {
    //TODO : accessTOken type설정
    console.log(request, '업데이트를 한다 ..');
    return this.cartService.changeOption(id, request);
  }
}
