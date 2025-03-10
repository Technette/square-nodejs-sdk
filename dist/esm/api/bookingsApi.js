import { bulkRetrieveBookingsRequestSchema, } from '../models/bulkRetrieveBookingsRequest';
import { bulkRetrieveBookingsResponseSchema, } from '../models/bulkRetrieveBookingsResponse';
import { bulkRetrieveTeamMemberBookingProfilesRequestSchema, } from '../models/bulkRetrieveTeamMemberBookingProfilesRequest';
import { bulkRetrieveTeamMemberBookingProfilesResponseSchema, } from '../models/bulkRetrieveTeamMemberBookingProfilesResponse';
import { cancelBookingRequestSchema, } from '../models/cancelBookingRequest';
import { cancelBookingResponseSchema, } from '../models/cancelBookingResponse';
import { createBookingRequestSchema, } from '../models/createBookingRequest';
import { createBookingResponseSchema, } from '../models/createBookingResponse';
import { listBookingsResponseSchema, } from '../models/listBookingsResponse';
import { listLocationBookingProfilesResponseSchema, } from '../models/listLocationBookingProfilesResponse';
import { listTeamMemberBookingProfilesResponseSchema, } from '../models/listTeamMemberBookingProfilesResponse';
import { retrieveBookingResponseSchema, } from '../models/retrieveBookingResponse';
import { retrieveBusinessBookingProfileResponseSchema, } from '../models/retrieveBusinessBookingProfileResponse';
import { retrieveLocationBookingProfileResponseSchema, } from '../models/retrieveLocationBookingProfileResponse';
import { retrieveTeamMemberBookingProfileResponseSchema, } from '../models/retrieveTeamMemberBookingProfileResponse';
import { searchAvailabilityRequestSchema, } from '../models/searchAvailabilityRequest';
import { searchAvailabilityResponseSchema, } from '../models/searchAvailabilityResponse';
import { updateBookingRequestSchema, } from '../models/updateBookingRequest';
import { updateBookingResponseSchema, } from '../models/updateBookingResponse';
import { boolean, number, optional, string } from '../schema';
import { BaseApi } from './baseApi';
export class BookingsApi extends BaseApi {
    /**
     * Retrieve a collection of bookings.
     *
     * To call this endpoint with buyer-level permissions, set `APPOINTMENTS_READ` for the OAuth scope.
     * To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_READ` and
     * `APPOINTMENTS_READ` for the OAuth scope.
     *
     * @param limit          The maximum number of results per page to return in a paged response.
     * @param cursor         The pagination cursor from the preceding response to return the next page of the
     *                                 results. Do not set this when retrieving the first page of the results.
     * @param customerId     The [customer](entity:Customer) for whom to retrieve bookings. If this is not set,
     *                                 bookings for all customers are retrieved.
     * @param teamMemberId   The team member for whom to retrieve bookings. If this is not set, bookings of
     *                                 all members are retrieved.
     * @param locationId     The location for which to retrieve bookings. If this is not set, all locations'
     *                                 bookings are retrieved.
     * @param startAtMin     The RFC 3339 timestamp specifying the earliest of the start time. If this is not
     *                                 set, the current time is used.
     * @param startAtMax     The RFC 3339 timestamp specifying the latest of the start time. If this is not
     *                                 set, the time of 31 days after `start_at_min` is used.
     * @return Response from the API call
     */
    async listBookings(limit, cursor, customerId, teamMemberId, locationId, startAtMin, startAtMax, requestOptions) {
        const req = this.createRequest('GET', '/v2/bookings');
        const mapped = req.prepareArgs({
            limit: [limit, optional(number())],
            cursor: [cursor, optional(string())],
            customerId: [customerId, optional(string())],
            teamMemberId: [teamMemberId, optional(string())],
            locationId: [locationId, optional(string())],
            startAtMin: [startAtMin, optional(string())],
            startAtMax: [startAtMax, optional(string())],
        });
        req.query('limit', mapped.limit);
        req.query('cursor', mapped.cursor);
        req.query('customer_id', mapped.customerId);
        req.query('team_member_id', mapped.teamMemberId);
        req.query('location_id', mapped.locationId);
        req.query('start_at_min', mapped.startAtMin);
        req.query('start_at_max', mapped.startAtMax);
        req.authenticate([{ global: true }]);
        return req.callAsJson(listBookingsResponseSchema, requestOptions);
    }
    /**
     * Creates a booking.
     *
     * The required input must include the following:
     * - `Booking.location_id`
     * - `Booking.start_at`
     * - `Booking.AppointmentSegment.team_member_id`
     * - `Booking.AppointmentSegment.service_variation_id`
     * - `Booking.AppointmentSegment.service_variation_version`
     *
     * To call this endpoint with buyer-level permissions, set `APPOINTMENTS_WRITE` for the OAuth scope.
     * To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_WRITE` and
     * `APPOINTMENTS_WRITE` for the OAuth scope.
     *
     * For calls to this endpoint with seller-level permissions to succeed, the seller must have subscribed
     * to *Appointments Plus*
     * or *Appointments Premium*.
     *
     * @param body         An object containing the fields to POST for the request.  See
     *                                                    the corresponding object definition for field details.
     * @return Response from the API call
     */
    async createBooking(body, requestOptions) {
        const req = this.createRequest('POST', '/v2/bookings');
        const mapped = req.prepareArgs({
            body: [body, createBookingRequestSchema],
        });
        req.header('Content-Type', 'application/json');
        req.json(mapped.body);
        req.authenticate([{ global: true }]);
        return req.callAsJson(createBookingResponseSchema, requestOptions);
    }
    /**
     * Searches for availabilities for booking.
     *
     * To call this endpoint with buyer-level permissions, set `APPOINTMENTS_READ` for the OAuth scope.
     * To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_READ` and
     * `APPOINTMENTS_READ` for the OAuth scope.
     *
     * @param body         An object containing the fields to POST for the request.
     *                                                         See the corresponding object definition for field details.
     * @return Response from the API call
     */
    async searchAvailability(body, requestOptions) {
        const req = this.createRequest('POST', '/v2/bookings/availability/search');
        const mapped = req.prepareArgs({
            body: [body, searchAvailabilityRequestSchema],
        });
        req.header('Content-Type', 'application/json');
        req.json(mapped.body);
        req.authenticate([{ global: true }]);
        return req.callAsJson(searchAvailabilityResponseSchema, requestOptions);
    }
    /**
     * Bulk-Retrieves a list of bookings by booking IDs.
     *
     * To call this endpoint with buyer-level permissions, set `APPOINTMENTS_READ` for the OAuth scope.
     * To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_READ` and
     * `APPOINTMENTS_READ` for the OAuth scope.
     *
     * @param body         An object containing the fields to POST for the request.
     *                                                           See the corresponding object definition for field
     *                                                           details.
     * @return Response from the API call
     */
    async bulkRetrieveBookings(body, requestOptions) {
        const req = this.createRequest('POST', '/v2/bookings/bulk-retrieve');
        const mapped = req.prepareArgs({
            body: [body, bulkRetrieveBookingsRequestSchema],
        });
        req.header('Content-Type', 'application/json');
        req.json(mapped.body);
        req.authenticate([{ global: true }]);
        return req.callAsJson(bulkRetrieveBookingsResponseSchema, requestOptions);
    }
    /**
     * Retrieves a seller's booking profile.
     *
     * @return Response from the API call
     */
    async retrieveBusinessBookingProfile(requestOptions) {
        const req = this.createRequest('GET', '/v2/bookings/business-booking-profile');
        req.authenticate([{ global: true }]);
        return req.callAsJson(retrieveBusinessBookingProfileResponseSchema, requestOptions);
    }
    /**
     * Lists location booking profiles of a seller.
     *
     * @param limit  The maximum number of results to return in a paged response.
     * @param cursor The pagination cursor from the preceding response to return the next page of the results.
     *                         Do not set this when retrieving the first page of the results.
     * @return Response from the API call
     */
    async listLocationBookingProfiles(limit, cursor, requestOptions) {
        const req = this.createRequest('GET', '/v2/bookings/location-booking-profiles');
        const mapped = req.prepareArgs({
            limit: [limit, optional(number())],
            cursor: [cursor, optional(string())],
        });
        req.query('limit', mapped.limit);
        req.query('cursor', mapped.cursor);
        req.authenticate([{ global: true }]);
        return req.callAsJson(listLocationBookingProfilesResponseSchema, requestOptions);
    }
    /**
     * Retrieves a seller's location booking profile.
     *
     * @param locationId  The ID of the location to retrieve the booking profile.
     * @return Response from the API call
     */
    async retrieveLocationBookingProfile(locationId, requestOptions) {
        const req = this.createRequest('GET');
        const mapped = req.prepareArgs({ locationId: [locationId, string()] });
        req.appendTemplatePath `/v2/bookings/location-booking-profiles/${mapped.locationId}`;
        req.authenticate([{ global: true }]);
        return req.callAsJson(retrieveLocationBookingProfileResponseSchema, requestOptions);
    }
    /**
     * Lists booking profiles for team members.
     *
     * @param bookableOnly  Indicates whether to include only bookable team members in the returned result
     *                                 (`true`) or not (`false`).
     * @param limit         The maximum number of results to return in a paged response.
     * @param cursor        The pagination cursor from the preceding response to return the next page of the
     *                                 results. Do not set this when retrieving the first page of the results.
     * @param locationId    Indicates whether to include only team members enabled at the given location in
     *                                 the returned result.
     * @return Response from the API call
     */
    async listTeamMemberBookingProfiles(bookableOnly, limit, cursor, locationId, requestOptions) {
        const req = this.createRequest('GET', '/v2/bookings/team-member-booking-profiles');
        const mapped = req.prepareArgs({
            bookableOnly: [bookableOnly, optional(boolean())],
            limit: [limit, optional(number())],
            cursor: [cursor, optional(string())],
            locationId: [locationId, optional(string())],
        });
        req.query('bookable_only', mapped.bookableOnly);
        req.query('limit', mapped.limit);
        req.query('cursor', mapped.cursor);
        req.query('location_id', mapped.locationId);
        req.authenticate([{ global: true }]);
        return req.callAsJson(listTeamMemberBookingProfilesResponseSchema, requestOptions);
    }
    /**
     * Retrieves one or more team members' booking profiles.
     *
     * @param body         An object containing the fields to
     *                                                                            POST for the request.  See the
     *                                                                            corresponding object definition for
     *                                                                            field details.
     * @return Response from the API call
     */
    async bulkRetrieveTeamMemberBookingProfiles(body, requestOptions) {
        const req = this.createRequest('POST', '/v2/bookings/team-member-booking-profiles/bulk-retrieve');
        const mapped = req.prepareArgs({
            body: [body, bulkRetrieveTeamMemberBookingProfilesRequestSchema],
        });
        req.header('Content-Type', 'application/json');
        req.json(mapped.body);
        req.authenticate([{ global: true }]);
        return req.callAsJson(bulkRetrieveTeamMemberBookingProfilesResponseSchema, requestOptions);
    }
    /**
     * Retrieves a team member's booking profile.
     *
     * @param teamMemberId   The ID of the team member to retrieve.
     * @return Response from the API call
     */
    async retrieveTeamMemberBookingProfile(teamMemberId, requestOptions) {
        const req = this.createRequest('GET');
        const mapped = req.prepareArgs({ teamMemberId: [teamMemberId, string()] });
        req.appendTemplatePath `/v2/bookings/team-member-booking-profiles/${mapped.teamMemberId}`;
        req.authenticate([{ global: true }]);
        return req.callAsJson(retrieveTeamMemberBookingProfileResponseSchema, requestOptions);
    }
    /**
     * Retrieves a booking.
     *
     * To call this endpoint with buyer-level permissions, set `APPOINTMENTS_READ` for the OAuth scope.
     * To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_READ` and
     * `APPOINTMENTS_READ` for the OAuth scope.
     *
     * @param bookingId  The ID of the [Booking](entity:Booking) object representing the to-be-retrieved
     *                             booking.
     * @return Response from the API call
     */
    async retrieveBooking(bookingId, requestOptions) {
        const req = this.createRequest('GET');
        const mapped = req.prepareArgs({ bookingId: [bookingId, string()] });
        req.appendTemplatePath `/v2/bookings/${mapped.bookingId}`;
        req.authenticate([{ global: true }]);
        return req.callAsJson(retrieveBookingResponseSchema, requestOptions);
    }
    /**
     * Updates a booking.
     *
     * To call this endpoint with buyer-level permissions, set `APPOINTMENTS_WRITE` for the OAuth scope.
     * To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_WRITE` and
     * `APPOINTMENTS_WRITE` for the OAuth scope.
     *
     * For calls to this endpoint with seller-level permissions to succeed, the seller must have subscribed
     * to *Appointments Plus*
     * or *Appointments Premium*.
     *
     * @param bookingId    The ID of the [Booking](entity:Booking) object representing
     *                                                    the to-be-updated booking.
     * @param body         An object containing the fields to POST for the request.  See
     *                                                    the corresponding object definition for field details.
     * @return Response from the API call
     */
    async updateBooking(bookingId, body, requestOptions) {
        const req = this.createRequest('PUT');
        const mapped = req.prepareArgs({
            bookingId: [bookingId, string()],
            body: [body, updateBookingRequestSchema],
        });
        req.header('Content-Type', 'application/json');
        req.json(mapped.body);
        req.appendTemplatePath `/v2/bookings/${mapped.bookingId}`;
        req.authenticate([{ global: true }]);
        return req.callAsJson(updateBookingResponseSchema, requestOptions);
    }
    /**
     * Cancels an existing booking.
     *
     * To call this endpoint with buyer-level permissions, set `APPOINTMENTS_WRITE` for the OAuth scope.
     * To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_WRITE` and
     * `APPOINTMENTS_WRITE` for the OAuth scope.
     *
     * For calls to this endpoint with seller-level permissions to succeed, the seller must have subscribed
     * to *Appointments Plus*
     * or *Appointments Premium*.
     *
     * @param bookingId    The ID of the [Booking](entity:Booking) object representing
     *                                                    the to-be-cancelled booking.
     * @param body         An object containing the fields to POST for the request.  See
     *                                                    the corresponding object definition for field details.
     * @return Response from the API call
     */
    async cancelBooking(bookingId, body, requestOptions) {
        const req = this.createRequest('POST');
        const mapped = req.prepareArgs({
            bookingId: [bookingId, string()],
            body: [body, cancelBookingRequestSchema],
        });
        req.header('Content-Type', 'application/json');
        req.json(mapped.body);
        req.appendTemplatePath `/v2/bookings/${mapped.bookingId}/cancel`;
        req.authenticate([{ global: true }]);
        return req.callAsJson(cancelBookingResponseSchema, requestOptions);
    }
}
//# sourceMappingURL=bookingsApi.js.map