import { Controller } from "@nestjs/common";
import { CategoryService } from "./category.service";
import { CreateCategoryDto } from "./dto/create-category.dto";
import { UpdateCategoryDto } from "./dto/update-category.dto";
import { MessagePattern, Payload } from "@nestjs/microservices";

@Controller("categories")
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @MessagePattern({ cmd: "create.category" })
  create(@Payload() createCategoryDto: CreateCategoryDto) {
    return this.categoryService.create(createCategoryDto);
  }

  @MessagePattern({ cmd: "find.all.categories" })
  findAll(
    @Payload()
    payload: {
      page?: number;
      limit?: number;
      search?: string;
      active?: boolean;
    } = {},
  ) {
    const { page = 1, limit = 10, search, active } = payload;
    return this.categoryService.findAll(page, limit, search, active);
  }

  @MessagePattern({ cmd: "find.one.category" })
  findOne(@Payload("id") id: string) {
    return this.categoryService.findOne(id);
  }

  @MessagePattern({ cmd: "find.category.by.slug" })
  findBySlug(@Payload("slug") slug: string) {
    return this.categoryService.findBySlug(slug);
  }

  @MessagePattern({ cmd: "update.category" })
  update(
    @Payload() payload: { id: string; updateCategoryDto: UpdateCategoryDto },
  ) {
    return this.categoryService.update(payload.id, payload.updateCategoryDto);
  }

  @MessagePattern({ cmd: "remove.category" })
  remove(@Payload("id") id: string) {
    return this.categoryService.remove(id);
  }

  @MessagePattern({ cmd: "activate.category" })
  activate(@Payload("id") id: string) {
    return this.categoryService.activate(id);
  }

  @MessagePattern({ cmd: "deactivate.category" })
  deactivate(@Payload("id") id: string) {
    return this.categoryService.deactivate(id);
  }
}
