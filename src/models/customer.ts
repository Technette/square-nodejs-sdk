import {
  array,
  bigint,
  lazy,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { Address, addressSchema } from './address';
import { Card, cardSchema } from './card';
import {
  CustomerPreferences,
  customerPreferencesSchema,
} from './customerPreferences';

/** Represents a Square customer profile in the Customer Directory of a Square seller. */
export interface Customer {
  /** A unique Square-assigned ID for the customer profile. */
  id?: string;
  /** The timestamp when the customer profile was created, in RFC 3339 format. */
  createdAt?: string;
  /** The timestamp when the customer profile was last updated, in RFC 3339 format. */
  updatedAt?: string;
  /**
   * Payment details of the credit, debit, and gift cards stored on file for the customer profile.
   * DEPRECATED at version 2021-06-16. Replaced by calling [ListCards]($e/Cards/ListCards) (for credit and debit cards on file)
   * or [ListGiftCards]($e/GiftCards/ListGiftCards) (for gift cards on file) and including the `customer_id` query parameter.
   * For more information, see [Migrate to the Cards API and Gift Cards API](https://developer.squareup.com/docs/customers-api/use-the-api/integrate-with-other-services#migrate-customer-cards).
   */
  cards?: Card[];
  /** The given (i.e., first) name associated with the customer profile. */
  givenName?: string;
  /** The family (i.e., last) name associated with the customer profile. */
  familyName?: string;
  /** A nickname for the customer profile. */
  nickname?: string;
  /** A business name associated with the customer profile. */
  companyName?: string;
  /** The email address associated with the customer profile. */
  emailAddress?: string;
  /**
   * Represents a postal address in a country. The address format is based
   * on an [open-source library from Google](https://github.com/google/libaddressinput). For more information,
   * see [AddressValidationMetadata](https://github.com/google/libaddressinput/wiki/AddressValidationMetadata).
   * This format has dedicated fields for four address components: postal code,
   * locality (city), administrative district (state, prefecture, or province), and
   * sublocality (town or village). These components have dedicated fields in the
   * `Address` object because software sometimes behaves differently based on them.
   * For example, sales tax software may charge different amounts of sales tax
   * based on the postal code, and some software is only available in
   * certain states due to compliance reasons.
   * For the remaining address components, the `Address` type provides the
   * `address_line_1` and `address_line_2` fields for free-form data entry.
   * These fields are free-form because the remaining address components have
   * too many variations around the world and typical software does not parse
   * these components. These fields enable users to enter anything they want.
   * Note that, in the current implementation, all other `Address` type fields are blank.
   * These include `address_line_3`, `sublocality_2`, `sublocality_3`,
   * `administrative_district_level_2`, `administrative_district_level_3`,
   * `first_name`, `last_name`, and `organization`.
   * When it comes to localization, the seller's language preferences
   * (see [Language preferences](https://developer.squareup.com/docs/locations-api#location-specific-and-seller-level-language-preferences))
   * are ignored for addresses. Even though Square products (such as Square Point of Sale
   * and the Seller Dashboard) mostly use a seller's language preference in
   * communication, when it comes to addresses, they will use English for a US address,
   * Japanese for an address in Japan, and so on.
   */
  address?: Address;
  /** The 11-digit phone number associated with the customer profile. */
  phoneNumber?: string;
  /**
   * The birthday associated with the customer profile, in RFC 3339 format. The year is optional. The timezone and time are not allowed.
   * For example, `0000-09-21T00:00:00-00:00` represents a birthday on September 21 and `1998-09-21T00:00:00-00:00` represents a birthday on September 21, 1998.
   */
  birthday?: string;
  /**
   * An optional second ID used to associate the customer profile with an
   * entity in another system.
   */
  referenceId?: string;
  /** A custom note associated with the customer profile. */
  note?: string;
  /** Represents communication preferences for the customer profile. */
  preferences?: CustomerPreferences;
  /** Indicates the method used to create the customer profile. */
  creationSource?: string;
  /** The IDs of customer groups the customer belongs to. */
  groupIds?: string[];
  /** The IDs of segments the customer belongs to. */
  segmentIds?: string[];
  /** The Square-assigned version number of the customer profile. The version number is incremented each time an update is committed to the customer profile, except for changes to customer segment membership and cards on file. */
  version?: bigint;
}

export const customerSchema: Schema<Customer> = object({
  id: ['id', optional(string())],
  createdAt: ['created_at', optional(string())],
  updatedAt: ['updated_at', optional(string())],
  cards: ['cards', optional(array(lazy(() => cardSchema)))],
  givenName: ['given_name', optional(string())],
  familyName: ['family_name', optional(string())],
  nickname: ['nickname', optional(string())],
  companyName: ['company_name', optional(string())],
  emailAddress: ['email_address', optional(string())],
  address: ['address', optional(lazy(() => addressSchema))],
  phoneNumber: ['phone_number', optional(string())],
  birthday: ['birthday', optional(string())],
  referenceId: ['reference_id', optional(string())],
  note: ['note', optional(string())],
  preferences: ['preferences', optional(lazy(() => customerPreferencesSchema))],
  creationSource: ['creation_source', optional(string())],
  groupIds: ['group_ids', optional(array(string()))],
  segmentIds: ['segment_ids', optional(array(string()))],
  version: ['version', optional(bigint())],
});
