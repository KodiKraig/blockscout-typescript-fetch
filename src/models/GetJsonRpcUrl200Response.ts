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
 * @interface GetJsonRpcUrl200Response
 */
export interface GetJsonRpcUrl200Response {
    /**
     * 
     * @type {string}
     * @memberof GetJsonRpcUrl200Response
     */
    jsonRpcUrl: string;
}

/**
 * Check if a given object implements the GetJsonRpcUrl200Response interface.
 */
export function instanceOfGetJsonRpcUrl200Response(value: object): boolean {
    if (!('jsonRpcUrl' in value)) return false;
    return true;
}

export function GetJsonRpcUrl200ResponseFromJSON(json: any): GetJsonRpcUrl200Response {
    return GetJsonRpcUrl200ResponseFromJSONTyped(json, false);
}

export function GetJsonRpcUrl200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetJsonRpcUrl200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'jsonRpcUrl': json['json_rpc_url'],
    };
}

export function GetJsonRpcUrl200ResponseToJSON(value?: GetJsonRpcUrl200Response | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'json_rpc_url': value['jsonRpcUrl'],
    };
}

