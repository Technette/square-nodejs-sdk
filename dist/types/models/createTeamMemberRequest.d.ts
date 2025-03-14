import { Schema } from '../schema';
import { TeamMember } from './teamMember';
/** Represents a create request for a `TeamMember` object. */
export interface CreateTeamMemberRequest {
    /**
     * A unique string that identifies this `CreateTeamMember` request.
     * Keys can be any valid string, but must be unique for every request.
     * For more information, see [Idempotency](https://developer.squareup.com/docs/build-basics/common-api-patterns/idempotency).
     * The minimum length is 1 and the maximum length is 45.
     */
    idempotencyKey?: string;
    /** A record representing an individual team member for a business. */
    teamMember?: TeamMember;
}
export declare const createTeamMemberRequestSchema: Schema<CreateTeamMemberRequest>;
