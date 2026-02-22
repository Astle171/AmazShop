import type { ProductDetail } from "@/types";
import { phones, tablets } from "./phones";
import { laptops, watches } from "./laptops";
import { audio, gaming } from "./audio";

export const allProducts: ProductDetail[] = [
  ...phones,
  ...tablets,
  ...laptops,
  ...watches,
  ...audio,
  ...gaming,
];
