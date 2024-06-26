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
import type { MarketChartItem } from './MarketChartItem';
import {
    MarketChartItemFromJSON,
    MarketChartItemFromJSONTyped,
    MarketChartItemToJSON,
} from './MarketChartItem';

/**
 * 
 * @export
 * @interface GetMarketChart200Response
 */
export interface GetMarketChart200Response {
    /**
     * 
     * @type {string}
     * @memberof GetMarketChart200Response
     */
    availableSupply: string;
    /**
     * 
     * @type {Array<MarketChartItem>}
     * @memberof GetMarketChart200Response
     */
    chartData: Array<MarketChartItem>;
}

/**
 * Check if a given object implements the GetMarketChart200Response interface.
 */
export function instanceOfGetMarketChart200Response(value: object): boolean {
    if (!('availableSupply' in value)) return false;
    if (!('chartData' in value)) return false;
    return true;
}

export function GetMarketChart200ResponseFromJSON(json: any): GetMarketChart200Response {
    return GetMarketChart200ResponseFromJSONTyped(json, false);
}

export function GetMarketChart200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetMarketChart200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'availableSupply': json['available_supply'],
        'chartData': ((json['chart_data'] as Array<any>).map(MarketChartItemFromJSON)),
    };
}

export function GetMarketChart200ResponseToJSON(value?: GetMarketChart200Response | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'available_supply': value['availableSupply'],
        'chart_data': ((value['chartData'] as Array<any>).map(MarketChartItemToJSON)),
    };
}

