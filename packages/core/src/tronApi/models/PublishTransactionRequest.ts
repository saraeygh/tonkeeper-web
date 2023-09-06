/* tslint:disable */
/* eslint-disable */
/**
 * gasless TRON service REST api
 * Service to publish TRON transactions
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: support@tonkeeper.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { RequestData } from './RequestData';
import {
    RequestDataFromJSON,
    RequestDataFromJSONTyped,
    RequestDataToJSON,
} from './RequestData';

/**
 * 
 * @export
 * @interface PublishTransactionRequest
 */
export interface PublishTransactionRequest {
    /**
     * 
     * @type {RequestData}
     * @memberof PublishTransactionRequest
     */
    request: RequestData;
    /**
     * 
     * @type {string}
     * @memberof PublishTransactionRequest
     */
    hash: string;
    /**
     * 
     * @type {string}
     * @memberof PublishTransactionRequest
     */
    signature: string;
}

/**
 * Check if a given object implements the PublishTransactionRequest interface.
 */
export function instanceOfPublishTransactionRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "request" in value;
    isInstance = isInstance && "hash" in value;
    isInstance = isInstance && "signature" in value;

    return isInstance;
}

export function PublishTransactionRequestFromJSON(json: any): PublishTransactionRequest {
    return PublishTransactionRequestFromJSONTyped(json, false);
}

export function PublishTransactionRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublishTransactionRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'request': RequestDataFromJSON(json['request']),
        'hash': json['hash'],
        'signature': json['signature'],
    };
}

export function PublishTransactionRequestToJSON(value?: PublishTransactionRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'request': RequestDataToJSON(value.request),
        'hash': value.hash,
        'signature': value.signature,
    };
}

