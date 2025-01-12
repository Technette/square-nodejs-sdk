import { Schema } from '../schema';
import { Money } from './money';
import { OrderLineItemAppliedDiscount } from './orderLineItemAppliedDiscount';
import { OrderLineItemAppliedServiceCharge } from './orderLineItemAppliedServiceCharge';
import { OrderLineItemAppliedTax } from './orderLineItemAppliedTax';
import { OrderLineItemModifier } from './orderLineItemModifier';
import { OrderLineItemPricingBlocklists } from './orderLineItemPricingBlocklists';
import { OrderQuantityUnit } from './orderQuantityUnit';
/**
 * Represents a line item in an order. Each line item describes a different
 * product to purchase, with its own quantity and price details.
 */
export interface OrderLineItem {
    /** A unique ID that identifies the line item only within this order. */
    uid?: string | null;
    /** The name of the line item. */
    name?: string | null;
    /**
     * The count, or measurement, of a line item being purchased:
     * If `quantity` is a whole number, and `quantity_unit` is not specified, then `quantity` denotes an item count.  For example: `3` apples.
     * If `quantity` is a whole or decimal number, and `quantity_unit` is also specified, then `quantity` denotes a measurement.  For example: `2.25` pounds of broccoli.
     * For more information, see [Specify item quantity and measurement unit](https://developer.squareup.com/docs/orders-api/create-orders#specify-item-quantity-and-measurement-unit).
     * Line items with a quantity of `0` are automatically removed
     * when paying for or otherwise completing the order.
     */
    quantity: string;
    /**
     * Contains the measurement unit for a quantity and a precision that
     * specifies the number of digits after the decimal point for decimal quantities.
     */
    quantityUnit?: OrderQuantityUnit;
    /** An optional note associated with the line item. */
    note?: string | null;
    /** The [CatalogItemVariation](entity:CatalogItemVariation) ID applied to this line item. */
    catalogObjectId?: string | null;
    /** The version of the catalog object that this line item references. */
    catalogVersion?: bigint | null;
    /** The name of the variation applied to this line item. */
    variationName?: string | null;
    /** Represents the line item type. */
    itemType?: string;
    /**
     * Application-defined data attached to this line item. Metadata fields are intended
     * to store descriptive references or associations with an entity in another system or store brief
     * information about the object. Square does not process this field; it only stores and returns it
     * in relevant API calls. Do not use metadata to store any sensitive information (such as personally
     * identifiable information or card details).
     * Keys written by applications must be 60 characters or less and must be in the character set
     * `[a-zA-Z0-9_-]`. Entries can also include metadata generated by Square. These keys are prefixed
     * with a namespace, separated from the key with a ':' character.
     * Values have a maximum length of 255 characters.
     * An application can have up to 10 entries per metadata field.
     * Entries written by applications are private and can only be read or modified by the same
     * application.
     * For more information, see [Metadata](https://developer.squareup.com/docs/build-basics/metadata).
     */
    metadata?: Record<string, string> | null;
    /** The [CatalogModifier](entity:CatalogModifier)s applied to this line item. */
    modifiers?: OrderLineItemModifier[] | null;
    /**
     * The list of references to taxes applied to this line item. Each
     * `OrderLineItemAppliedTax` has a `tax_uid` that references the `uid` of a
     * top-level `OrderLineItemTax` applied to the line item. On reads, the
     * amount applied is populated.
     * An `OrderLineItemAppliedTax` is automatically created on every line
     * item for all `ORDER` scoped taxes added to the order. `OrderLineItemAppliedTax`
     * records for `LINE_ITEM` scoped taxes must be added in requests for the tax
     * to apply to any line items.
     * To change the amount of a tax, modify the referenced top-level tax.
     */
    appliedTaxes?: OrderLineItemAppliedTax[] | null;
    /**
     * The list of references to discounts applied to this line item. Each
     * `OrderLineItemAppliedDiscount` has a `discount_uid` that references the `uid` of a top-level
     * `OrderLineItemDiscounts` applied to the line item. On reads, the amount
     * applied is populated.
     * An `OrderLineItemAppliedDiscount` is automatically created on every line item for all
     * `ORDER` scoped discounts that are added to the order. `OrderLineItemAppliedDiscount` records
     * for `LINE_ITEM` scoped discounts must be added in requests for the discount to apply to any
     * line items.
     * To change the amount of a discount, modify the referenced top-level discount.
     */
    appliedDiscounts?: OrderLineItemAppliedDiscount[] | null;
    /**
     * The list of references to service charges applied to this line item. Each
     * `OrderLineItemAppliedServiceCharge` has a `service_charge_id` that references the `uid` of a
     * top-level `OrderServiceCharge` applied to the line item. On reads, the amount applied is
     * populated.
     * To change the amount of a service charge, modify the referenced top-level service charge.
     */
    appliedServiceCharges?: OrderLineItemAppliedServiceCharge[] | null;
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
    variationTotalPriceMoney?: Money;
    /**
     * Represents an amount of money. `Money` fields can be signed or unsigned.
     * Fields that do not explicitly define whether they are signed or unsigned are
     * considered unsigned and can only hold positive amounts. For signed fields, the
     * sign of the value indicates the purpose of the money transfer. See
     * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
     * for more information.
     */
    grossSalesMoney?: Money;
    /**
     * Represents an amount of money. `Money` fields can be signed or unsigned.
     * Fields that do not explicitly define whether they are signed or unsigned are
     * considered unsigned and can only hold positive amounts. For signed fields, the
     * sign of the value indicates the purpose of the money transfer. See
     * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
     * for more information.
     */
    totalTaxMoney?: Money;
    /**
     * Represents an amount of money. `Money` fields can be signed or unsigned.
     * Fields that do not explicitly define whether they are signed or unsigned are
     * considered unsigned and can only hold positive amounts. For signed fields, the
     * sign of the value indicates the purpose of the money transfer. See
     * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
     * for more information.
     */
    totalDiscountMoney?: Money;
    /**
     * Represents an amount of money. `Money` fields can be signed or unsigned.
     * Fields that do not explicitly define whether they are signed or unsigned are
     * considered unsigned and can only hold positive amounts. For signed fields, the
     * sign of the value indicates the purpose of the money transfer. See
     * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
     * for more information.
     */
    totalMoney?: Money;
    /**
     * Describes pricing adjustments that are blocked from automatic
     * application to a line item. For more information, see
     * [Apply Taxes and Discounts](https://developer.squareup.com/docs/orders-api/apply-taxes-and-discounts).
     */
    pricingBlocklists?: OrderLineItemPricingBlocklists;
    /**
     * Represents an amount of money. `Money` fields can be signed or unsigned.
     * Fields that do not explicitly define whether they are signed or unsigned are
     * considered unsigned and can only hold positive amounts. For signed fields, the
     * sign of the value indicates the purpose of the money transfer. See
     * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
     * for more information.
     */
    totalServiceChargeMoney?: Money;
}
export declare const orderLineItemSchema: Schema<OrderLineItem>;
