import { Schema } from '../schema';
/**
 * An employee object that is used by the external API.
 * DEPRECATED at version 2020-08-26. Replaced by [TeamMember](entity:TeamMember).
 */
export interface Employee {
    /** UUID for this object. */
    id?: string;
    /** The employee's first name. */
    firstName?: string | null;
    /** The employee's last name. */
    lastName?: string | null;
    /** The employee's email address */
    email?: string | null;
    /** The employee's phone number in E.164 format, i.e. "+12125554250" */
    phoneNumber?: string | null;
    /** A list of location IDs where this employee has access to. */
    locationIds?: string[] | null;
    /**
     * The status of the Employee being retrieved.
     * DEPRECATED at version 2020-08-26. Replaced by [TeamMemberStatus](entity:TeamMemberStatus).
     */
    status?: string;
    /**
     * Whether this employee is the owner of the merchant. Each merchant
     * has one owner employee, and that employee has full authority over
     * the account.
     */
    isOwner?: boolean | null;
    /** A read-only timestamp in RFC 3339 format. */
    createdAt?: string;
    /** A read-only timestamp in RFC 3339 format. */
    updatedAt?: string;
}
export declare const employeeSchema: Schema<Employee>;
