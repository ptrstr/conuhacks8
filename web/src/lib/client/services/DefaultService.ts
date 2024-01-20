/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class DefaultService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Read User Me
     * @returns any Successful Response
     * @throws ApiError
     */
    public readUserMeChatUsersMeGet(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/chat/users/me',
        });
    }
    /**
     * Read User
     * @param username
     * @returns any Successful Response
     * @throws ApiError
     */
    public readUserChatUsersUsernameGet(
        username: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/chat/users/{username}',
            path: {
                'username': username,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Authenticated Route
     * @returns any Successful Response
     * @throws ApiError
     */
    public authenticatedRouteAuthenticatedRouteGet(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/authenticated-route',
        });
    }
}
