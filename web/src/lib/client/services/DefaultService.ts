/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Feed } from '../models/Feed';
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
     * Feed Buddies
     * @returns Feed Successful Response
     * @throws ApiError
     */
    public feedBuddiesFeedsBuddiesGet(): CancelablePromise<Feed> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/feeds/buddies',
        });
    }
    /**
     * Feed Discovery
     * @returns Feed Successful Response
     * @throws ApiError
     */
    public feedDiscoveryFeedsDiscoveryGet(): CancelablePromise<Feed> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/feeds/discovery',
        });
    }
}
