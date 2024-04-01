import { Body, Controller, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiCreatedResponse } from '@nestjs/swagger';
import SuccessResponse from 'src/common/utils/success.response';
import { PatchApi, PostApi } from 'src/common/decorator/api.decorator';
import { CartService } from '../service/cart.service';
import { Cart } from '../dto/cart.dto';
import { AddCartDto } from '../dto/add-cart.dto';
import { UpdateCartDto } from '../dto/update-cart.dto';

@ApiTags('cart')
@Controller('cart')
export class CartController {
  constructor(private authService: CartService) {}

  // @PatchApi(() => UpdateCartDto, {
  //   path: '/modify/:id',
  //   description: '장바구니 정보 수정',
  //   auth: true,
  // })
  // updateCart(
  //   @Param() id: number,
  //   @Body() request: UpdateCartDto,
  // ): Promise<SuccessResponse> {
  //   //TODO : accessTOken type설정
  //   console.log(request, '업데이트를 한다 ..');
  //   return this.authService.updateUser(id, request);
  // }

  // @PostApi(() => Cart, {
  //   path: '/',
  //   description: '장바구니에 담기.',
  //   auth: true,
  // })
  // @ApiOperation({
  //   summary: '장바구니에 물품을 담는다.',
  //   description: '장바구니에 물품을 담는다.',
  // })
  // @ApiCreatedResponse({
  //   description: '장바구니에 물품 담기..',
  //   type: AddCartDto,
  // })
  // async addToCart(@Body() cartDto: AddCartDto) {
  //   return this.authService.saveUser(cartDto);
  // }
}
