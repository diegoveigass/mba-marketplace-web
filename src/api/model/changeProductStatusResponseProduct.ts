/**
 * Generated by orval v7.1.1 🍺
 * Do not edit manually.
 * MBA Marketplace API
 * API to manage MBA Marketplace
 * OpenAPI spec version: 1.0
 */
import type { ChangeProductStatusResponseProductAttachmentsItem } from './changeProductStatusResponseProductAttachmentsItem';
import type { ChangeProductStatusResponseProductCategory } from './changeProductStatusResponseProductCategory';
import type { ChangeProductStatusResponseProductOwner } from './changeProductStatusResponseProductOwner';

export type ChangeProductStatusResponseProduct = {
  attachments: ChangeProductStatusResponseProductAttachmentsItem[];
  category: ChangeProductStatusResponseProductCategory;
  description: string;
  id: string;
  owner: ChangeProductStatusResponseProductOwner;
  priceInCents: number;
  title: string;
};
