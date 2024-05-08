/* tslint:disable */
/* eslint-disable */
/**
 * BlockScout API
 * API for BlockScout web app
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: you@your-company.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface TotalERC20
 */
export interface TotalERC20 {
    /**
     * 
     * @type {string}
     * @memberof TotalERC20
     */
    decimals: string;
    /**
     * 
     * @type {string}
     * @memberof TotalERC20
     */
    value: string;
}

/**
 * Check if a given object implements the TotalERC20 interface.
 */
export function instanceOfTotalERC20(value: object): boolean {
    if (!('decimals' in value)) return false;
    if (!('value' in value)) return false;
    return true;
}

export function TotalERC20FromJSON(json: any): TotalERC20 {
    return TotalERC20FromJSONTyped(json, false);
}

export function TotalERC20FromJSONTyped(json: any, ignoreDiscriminator: boolean): TotalERC20 {
    if (json == null) {
        return json;
    }
    return {
        
        'decimals': json['decimals'],
        'value': json['value'],
    };
}

export function TotalERC20ToJSON(value?: TotalERC20 | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'decimals': value['decimals'],
        'value': value['value'],
    };
}
