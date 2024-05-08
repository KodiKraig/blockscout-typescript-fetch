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
 * @interface SearchResultBlock
 */
export interface SearchResultBlock {
    /**
     * 
     * @type {string}
     * @memberof SearchResultBlock
     */
    blockHash: string;
    /**
     * 
     * @type {number}
     * @memberof SearchResultBlock
     */
    blockNumber: number;
    /**
     * 
     * @type {string}
     * @memberof SearchResultBlock
     */
    timestamp: string;
    /**
     * 
     * @type {string}
     * @memberof SearchResultBlock
     */
    type: string;
    /**
     * 
     * @type {string}
     * @memberof SearchResultBlock
     */
    url: string;
}

/**
 * Check if a given object implements the SearchResultBlock interface.
 */
export function instanceOfSearchResultBlock(value: object): boolean {
    if (!('blockHash' in value)) return false;
    if (!('blockNumber' in value)) return false;
    if (!('timestamp' in value)) return false;
    if (!('type' in value)) return false;
    if (!('url' in value)) return false;
    return true;
}

export function SearchResultBlockFromJSON(json: any): SearchResultBlock {
    return SearchResultBlockFromJSONTyped(json, false);
}

export function SearchResultBlockFromJSONTyped(json: any, ignoreDiscriminator: boolean): SearchResultBlock {
    if (json == null) {
        return json;
    }
    return {
        
        'blockHash': json['block_hash'],
        'blockNumber': json['block_number'],
        'timestamp': json['timestamp'],
        'type': json['type'],
        'url': json['url'],
    };
}

export function SearchResultBlockToJSON(value?: SearchResultBlock | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'block_hash': value['blockHash'],
        'block_number': value['blockNumber'],
        'timestamp': value['timestamp'],
        'type': value['type'],
        'url': value['url'],
    };
}
