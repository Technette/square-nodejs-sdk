import { Schema } from '../schema';
/** Defines the parameters for a `DeprecatedCreateDisputeEvidenceFile` request. */
export interface DeprecatedCreateDisputeEvidenceFileRequest {
    /** The Unique ID. For more information, see [Idempotency](https://developer.squareup.com/docs/working-with-apis/idempotency). */
    idempotencyKey: string;
    /** The type of the dispute evidence. */
    evidenceType?: string;
    /**
     * The MIME type of the uploaded file.
     * The type can be image/heic, image/heif, image/jpeg, application/pdf, image/png, or image/tiff.
     */
    contentType?: string | null;
}
export declare const deprecatedCreateDisputeEvidenceFileRequestSchema: Schema<DeprecatedCreateDisputeEvidenceFileRequest>;
