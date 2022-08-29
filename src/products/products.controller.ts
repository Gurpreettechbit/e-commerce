import { Body, Controller, Post, Put } from '@nestjs/common';
import { UseAuthGuard } from 'src/auth/guards';
import { UseSerialize } from 'src/interceptors/serialize.interceptor';
import { CurrentUser } from 'src/users/decorators';
import { User } from 'src/users/users.entity';
import { ProductData, ProductSerialize } from './dtos';
import { UpdateProduct } from './dtos/update-product.dto';
import { ProductsService } from './products.service';

@UseSerialize(ProductSerialize)
@UseAuthGuard()
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post('create-product')
  createProduct(@CurrentUser() currentUser: User, @Body() productData: ProductData): Promise<ProductSerialize> {
    return this.productsService.create(currentUser, productData);
  }

  @Put('update-product')
  updateProduct(
    @CurrentUser() currentUser: User,
    @Body() { id, ...productData }: UpdateProduct,
  ): Promise<ProductSerialize> {
    return this.productsService.update(id, productData, currentUser);
  }
}
