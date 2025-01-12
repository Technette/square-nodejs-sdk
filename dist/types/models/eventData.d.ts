import { Schema } from '../schema';
export interface EventData {
    /** The name of the affected object’s type. */
    type?: string | null;
    /** The ID of the affected object. */
    id?: string;
    /** This is true if the affected object has been deleted; otherwise, it's absent. */
    deleted?: boolean | null;
    /** An object containing fields and values relevant to the event. It is absent if the affected object has been deleted. */
    object?: Record<string, unknown> | null;
}
export declare const eventDataSchema: Schema<EventData>;
