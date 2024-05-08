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
import type { Search200ResponseItemsInner } from './Search200ResponseItemsInner';
import {
    Search200ResponseItemsInnerFromJSON,
    Search200ResponseItemsInnerFromJSONTyped,
    Search200ResponseItemsInnerToJSON,
} from './Search200ResponseItemsInner';

/**
 * 
 * @export
 * @interface Search200Response
 */
export interface Search200Response {
    /**
     * 
     * @type {Array<Search200ResponseItemsInner>}
     * @memberof Search200Response
     */
    items: Array<Search200ResponseItemsInner>;
    /**
     * 
     * @type {object}
     * @memberof Search200Response
     */
    nextPageParams: object;
}

/**
 * Check if a given object implements the Search200Response interface.
 */
export function instanceOfSearch200Response(value: object): boolean {
    if (!('items' in value)) return false;
    if (!('nextPageParams' in value)) return false;
    return true;
}

export function Search200ResponseFromJSON(json: any): Search200Response {
    return Search200ResponseFromJSONTyped(json, false);
}

export function Search200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): Search200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'items': ((json['items'] as Array<any>).map(Search200ResponseItemsInnerFromJSON)),
        'nextPageParams': json['next_page_params'],
    };
}

export function Search200ResponseToJSON(value?: Search200Response | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'items': ((value['items'] as Array<any>).map(Search200ResponseItemsInnerToJSON)),
        'next_page_params': value['nextPageParams'],
    };
}
