import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";

import { ProductModule } from "./modules/product/product.module";
import { CategoryModule } from "./modules/category/category.module";
import { env } from "./modules/config";

@Module({
  imports: [
    MongooseModule.forRoot(
      env.MONGODB_URI ||
        "mongodb://mongo:mongo123@localhost:27017/productdb?authSource=admin",
    ),
    PassportModule,
    JwtModule.register({
      secret: env.JWT_SECRET,
      signOptions: { expiresIn: "24h" },
    }),
    ProductModule,
    CategoryModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
