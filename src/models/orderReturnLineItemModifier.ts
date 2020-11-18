import { lazy, object, optional, Schema, string } from '../schema';
import { Money, moneySchema } from './money';

/** A line item modifier being returned. */
export interface OrderReturnLineItemModifier {
  /** Unique ID that identifies the return modifier only within this order. */
  uid?: string;
  /**
   * `uid` of the Modifier from the LineItem from the Order which contains the
   * original sale of this line item modifier.
   */
  sourceModifierUid?: string;
  /** The catalog object id referencing [CatalogModifier](#type-catalogmodifier). */
  catalogObjectId?: string;
  /** The name of the item modifier. */
  name?: string;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned.
   * Fields that do not explicitly define whether they are signed or unsigned are
   * considered unsigned and can only hold positive amounts. For signed fields, the
   * sign of the value indicates the purpose of the money transfer. See
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
   * for more information.
   */
  basePriceMoney?: Money;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned.
   * Fields that do not explicitly define whether they are signed or unsigned are
   * considered unsigned and can only hold positive amounts. For signed fields, the
   * sign of the value indicates the purpose of the money transfer. See
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
   * for more information.
   */
  totalPriceMoney?: Money;
}

export const orderReturnLineItemModifierSchema: Schema<OrderReturnLineItemModifier> = object(
  {
    uid: ['uid', optional(string())],
    sourceModifierUid: ['source_modifier_uid', optional(string())],
    catalogObjectId: ['catalog_object_id', optional(string())],
    name: ['name', optional(string())],
    basePriceMoney: ['base_price_money', optional(lazy(() => moneySchema))],
    totalPriceMoney: ['total_price_money', optional(lazy(() => moneySchema))],
  }
);
