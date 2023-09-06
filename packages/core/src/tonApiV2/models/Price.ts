/* tslint:disable */
/* eslint-disable */
/**
 * REST api to TON blockchain explorer
 * Provide access to indexed TON blockchain
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: support@tonkeeper.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface Price
 */
export interface Price {
    /**
     * 
     * @type {string}
     * @memberof Price
     */
    value: string;
    /**
     * 
     * @type {string}
     * @memberof Price
     */
    tokenName: string;
}

/**
 * Check if a given object implements the Price interface.
 */
export function instanceOfPrice(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "value" in value;
    isInstance = isInstance && "tokenName" in value;

    return isInstance;
}

export function PriceFromJSON(json: any): Price {
    return PriceFromJSONTyped(json, false);
}

export function PriceFromJSONTyped(json: any, ignoreDiscriminator: boolean): Price {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'value': json['value'],
        'tokenName': json['token_name'],
    };
}

export function PriceToJSON(value?: Price | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'value': value.value,
        'token_name': value.tokenName,
    };
}

