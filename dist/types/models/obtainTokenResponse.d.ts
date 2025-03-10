import { Schema } from '../schema';
import { Error } from './error';
export interface ObtainTokenResponse {
    /**
     * A valid OAuth access token.
     * Provide the access token in a header with every request to Connect API
     * endpoints. For more information, see [OAuth API: Walkthrough](https://developer.squareup.com/docs/oauth-api/walkthrough).
     */
    accessToken?: string;
    /** This value is always _bearer_. */
    tokenType?: string;
    /** The date when the `access_token` expires, in [ISO 8601](http://www.iso.org/iso/home/standards/iso8601.htm) format. */
    expiresAt?: string;
    /** The ID of the authorizing merchant's business. */
    merchantId?: string;
    /**
     * __LEGACY FIELD__. The ID of a subscription plan the merchant signed up
     * for. The ID is only present if the merchant signed up for a subscription plan during authorization.
     */
    subscriptionId?: string;
    /**
     * __LEGACY FIELD__. The ID of the subscription plan the merchant signed
     * up for. The ID is only present if the merchant signed up for a subscription plan during
     * authorization.
     */
    planId?: string;
    /**
     * The OpenID token belonging to this person. This token is only present if the
     * OPENID scope is included in the authorization request.
     */
    idToken?: string;
    /**
     * A refresh token.
     * For more information, see [Refresh, Revoke, and Limit the Scope of OAuth Tokens](https://developer.squareup.com/docs/oauth-api/refresh-revoke-limit-scope).
     */
    refreshToken?: string;
    /**
     * A Boolean indicating that the access token is a short-lived access token.
     * The short-lived access token returned in the response expires in 24 hours.
     */
    shortLived?: boolean;
    /** Any errors that occurred during the request. */
    errors?: Error[];
    /** The date when the `refresh_token` expires, in [ISO 8601](http://www.iso.org/iso/home/standards/iso8601.htm) format. */
    refreshTokenExpiresAt?: string;
}
export declare const obtainTokenResponseSchema: Schema<ObtainTokenResponse>;
