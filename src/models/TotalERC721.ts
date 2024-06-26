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
 * @interface TotalERC721
 */
export interface TotalERC721 {
    /**
     * 
     * @type {string}
     * @memberof TotalERC721
     */
    tokenId: string;
}

/**
 * Check if a given object implements the TotalERC721 interface.
 */
export function instanceOfTotalERC721(value: object): boolean {
    if (!('tokenId' in value)) return false;
    return true;
}

export function TotalERC721FromJSON(json: any): TotalERC721 {
    return TotalERC721FromJSONTyped(json, false);
}

export function TotalERC721FromJSONTyped(json: any, ignoreDiscriminator: boolean): TotalERC721 {
    if (json == null) {
        return json;
    }
    return {
        
        'tokenId': json['token_id'],
    };
}

export function TotalERC721ToJSON(value?: TotalERC721 | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'token_id': value['tokenId'],
    };
}

