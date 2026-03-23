import { Controller } from "@nestjs/common";
import { ProductService } from "./product.service";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { AddReviewDto } from "./dto/add-review.dto";
import { MessagePattern, Payload } from "@nestjs/microservices";
import { ProductsPaginationDto } from "../../common/dto";

@Controller("products")
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @MessagePattern({ cmd: "create.product" })
  create(@Payload() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }

  @MessagePattern({ cmd: "find.all.products" })
  findAll(@Payload() productsPaginationDto: ProductsPaginationDto) {
    return this.productService.findAll(productsPaginationDto);
  }

  @MessagePattern({ cmd: "find.one.product" })
  findOne(@Payload("id") id: string) {
    return this.productService.findOne(id);
  }

  @MessagePattern({ cmd: "find.product.by.sku" })
  findBySku(@Payload("sku") sku: string) {
    return this.productService.findBySku(sku);
  }

  @MessagePattern({ cmd: "find.product.by.category" })
  findByCategory(
    @Payload() payload: { categoryId: string; page?: number; limit?: number },
  ) {
    const { categoryId, page = 1, limit = 10 } = payload;
    return this.productService.findByCategory(categoryId, page, limit);
  }

  @MessagePattern({ cmd: "update.product" })
  update(@Payload() payload: UpdateProductDto) {
    return this.productService.update(payload);
  }

  @MessagePattern({ cmd: "remove.product" })
  remove(@Payload("id") id: string) {
    return this.productService.remove(id);
  }

  @MessagePattern({ cmd: "add.product.review" })
  addReview(@Payload() payload: { id: string; addReviewDto: AddReviewDto }) {
    return this.productService.addReview(payload.id, payload.addReviewDto);
  }

  @MessagePattern({ cmd: "update.product.stock" })
  updateStock(@Payload() payload: { id: string; quantity: number }) {
    return this.productService.updateStock(payload.id, payload.quantity);
  }

  @MessagePattern({ cmd: "increment.product.views" })
  incrementViews(@Payload("id") id: string) {
    return this.productService.incrementViews(id);
  }

  @MessagePattern({ cmd: "get.featured.products" })
  getFeatured(@Payload("limit") limit: number = 10) {
    return this.productService.getFeatured(limit);
  }

  @MessagePattern({ cmd: "get.popular.products" })
  getPopular(@Payload("limit") limit: number = 10) {
    return this.productService.getPopular(limit);
  }
}
