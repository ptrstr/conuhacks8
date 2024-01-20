/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ChatService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Read Messages
     * @param otherId
     * @returns any Successful Response
     * @throws ApiError
     */
    public readMessagesChatMessagesOtherIdGet(
        otherId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/chat/messages/{other_id}',
            path: {
                'other_id': otherId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
