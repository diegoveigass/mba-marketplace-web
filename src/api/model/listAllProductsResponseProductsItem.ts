/**
 * Generated by orval v7.1.1 🍺
 * Do not edit manually.
 * MBA Marketplace API
 * API to manage MBA Marketplace
 * OpenAPI spec version: 1.0
 */
import type { ListAllProductsResponseProductsItemAttachmentsItem } from './listAllProductsResponseProductsItemAttachmentsItem';
import type { ListAllProductsResponseProductsItemCategory } from './listAllProductsResponseProductsItemCategory';
import type { ListAllProductsResponseProductsItemOwner } from './listAllProductsResponseProductsItemOwner';

export type ListAllProductsResponseProductsItem = {
  attachments: ListAllProductsResponseProductsItemAttachmentsItem[];
  category: ListAllProductsResponseProductsItemCategory;
  description: string;
  id: string;
  owner: ListAllProductsResponseProductsItemOwner;
  priceInCents: number;
  title: string;
};
