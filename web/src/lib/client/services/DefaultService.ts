/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserRead } from '../models/UserRead';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class DefaultService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Whoami
     * @returns string Successful Response
     * @throws ApiError
     */
    public whoamiWhoamiGet(): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/whoami',
        });
    }
    /**
     * Get User
     * @param userId
     * @returns UserRead Successful Response
     * @throws ApiError
     */
    public getUserUserUserIdGet(
        userId: string,
    ): CancelablePromise<UserRead> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/user/{user_id}',
            path: {
                'user_id': userId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Feed Buddies
     * @returns string Successful Response
     * @throws ApiError
     */
    public feedBuddiesFeedsBuddiesGet(): CancelablePromise<Array<string>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/feeds/buddies',
        });
    }
    /**
     * Feed Discovery
     * @returns string Successful Response
     * @throws ApiError
     */
    public feedDiscoveryFeedsDiscoveryGet(): CancelablePromise<Array<string>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/feeds/discovery',
        });
    }
}
