import { ProductEntity } from "../../domain/entity/product_entity";

export type RootStackParamList = {
  ProductListPage: undefined;
  ProductDetailPage: { product: ProductEntity };
  CartPage: undefined;
};
