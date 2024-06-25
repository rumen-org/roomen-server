// import { Injectable } from '@nestjs/common';
// import { AddCartDto } from '../dto/add-cart.dto';
// import SuccessResponse from 'src/common/utils/success.response';
// import { CartRepository } from '../repository/cart.repository';
// import { UpdateCartDto } from '../dto/update-cart.dto';

// @Injectable()
// export class CartService {
//   constructor(private cartRepository: CartRepository) {}

//   async addToCart(
//     id: number,
//     addCartDto: AddCartDto,
//   ): Promise<SuccessResponse> {
//     const cart = await this.cartRepository.addCart(addCartDto);
//     cart.success = true;
//     return SuccessResponse.fromSuccess(true);
//   }

//     return SuccessResponse.fromSuccess(true);
//   }
// }

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cart } from '../entity/cart.entity';
import { Product } from 'src/product/entity/product.entity';
import { User } from 'src/auth/entity/user.entity';
import { ProductCart } from 'src/product/entity/product-cart.entity';
import SuccessResponse from 'src/common/utils/success.response';
import { UpdateCartDto } from '../dto/update-cart.dto';
import { CartRepository } from '../repository/cart.repository';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(Cart) private readonly cartRepository: CartRepository,
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(ProductCart)
    private productCartRepository: Repository<ProductCart>,
  ) {}

  async addToCart(
    userId: string,
    productId: number,
    quantity: number,
  ): Promise<Cart> {
    // 사용자와 연결된 장바구니 찾기
    const user = await this.userRepository.findOne({
      where: {
        userId,
      },
      relations: ['cart'],
    });

    let cart = await this.cartRepository.findOne({
      where: {
        user: {
          cart: user.cart,
        },
      },
    });

    // 만약 사용자의 장바구니가 없다면 새로 생성
    if (!cart) {
      const user = new User();
      user.userId = userId; // Assume user is already created and has the ID

      cart = new Cart();
      cart.user = user;
      cart = await this.cartRepository.save(cart);
    }

    // 장바구니에 추가하려는 상품 찾기
    const product = await this.productRepository.findOne({
      where: { id: productId },
    });
    if (!product) {
      throw new Error('Product not found');
    }

    // 장바구니에 이미 추가된 상품인지 확인
    let productCart = await this.productCartRepository.findOne({
      where: { cart: { id: cart.id }, product: { id: product.id } },
    });

    if (productCart) {
      // 이미 추가된 상품이면 수량을 업데이트
      productCart.quantity += quantity;
    } else {
      // 새로운 상품을 장바구니에 추가
      productCart = new ProductCart();
      productCart.cart = cart;
      productCart.product = product;
      productCart.quantity = quantity;
    }

    // 상품 장바구니 아이템 저장
    await this.productCartRepository.save(productCart);

    // 최종적으로 업데이트된 장바구니 반환
    return this.cartRepository.findOne({
      where: { id: cart.id },
      relations: ['productCart', 'productCart.product'],
    });
  }

  async updateCart(cartId: number, quantity: number): Promise<Cart> {
    const cart = await this.cartRepository.findOne({ where: { id: cartId } });
    // cart.quantity = quantity;
    console.log(quantity);
    return this.cartRepository.save(cart);
  }

  async removeFromCart(cartId: number): Promise<void> {
    await this.cartRepository.delete(cartId);
  }

  async getCartItems(userId: number): Promise<Cart[]> {
    return this.cartRepository.find({
      where: { user: { id: userId } },
      relations: ['product'],
    });
  }

  async changeOption(
    userId: string,
    request: UpdateCartDto,
  ): Promise<SuccessResponse> {
    const cart = await this.cartRepository.updateCart(userId, request);
    return cart;
  }
}
