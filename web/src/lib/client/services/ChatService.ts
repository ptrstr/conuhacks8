/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Message } from '../models/Message';
import type { WebSocketKey } from '../models/WebSocketKey';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ChatService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Read Messages
     * @param otherId
     * @returns Message Successful Response
     * @throws ApiError
     */
    public readMessagesChatMessagesOtherIdGet(
        otherId: string,
    ): CancelablePromise<Array<Message>> {
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
    /**
     * Send Message
     * @param otherId
     * @param content
     * @returns any Successful Response
     * @throws ApiError
     */
    public sendMessageChatMessagesOtherIdPost(
        otherId: string,
        content: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/chat/messages/{other_id}',
            path: {
                'other_id': otherId,
            },
            query: {
                'content': content,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Ws Setup
     * @returns WebSocketKey Successful Response
     * @throws ApiError
     */
    public wsSetupChatWsSetupGet(): CancelablePromise<WebSocketKey> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/chat/ws/setup',
        });
    }
}
