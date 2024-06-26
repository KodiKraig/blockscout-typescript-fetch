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
import type { NFTInstance } from './NFTInstance';
import {
    NFTInstanceFromJSON,
    NFTInstanceFromJSONTyped,
    NFTInstanceToJSON,
} from './NFTInstance';

/**
 * 
 * @export
 * @interface GetNftInstances200Response
 */
export interface GetNftInstances200Response {
    /**
     * 
     * @type {Array<NFTInstance>}
     * @memberof GetNftInstances200Response
     */
    items: Array<NFTInstance>;
    /**
     * 
     * @type {object}
     * @memberof GetNftInstances200Response
     */
    nextPageParams: object;
}

/**
 * Check if a given object implements the GetNftInstances200Response interface.
 */
export function instanceOfGetNftInstances200Response(value: object): boolean {
    if (!('items' in value)) return false;
    if (!('nextPageParams' in value)) return false;
    return true;
}

export function GetNftInstances200ResponseFromJSON(json: any): GetNftInstances200Response {
    return GetNftInstances200ResponseFromJSONTyped(json, false);
}

export function GetNftInstances200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetNftInstances200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'items': ((json['items'] as Array<any>).map(NFTInstanceFromJSON)),
        'nextPageParams': json['next_page_params'],
    };
}

export function GetNftInstances200ResponseToJSON(value?: GetNftInstances200Response | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'items': ((value['items'] as Array<any>).map(NFTInstanceToJSON)),
        'next_page_params': value['nextPageParams'],
    };
}

