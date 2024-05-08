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
 * @interface Token
 */
export interface Token {
    /**
     * 
     * @type {string}
     * @memberof Token
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof Token
     */
    decimals: string;
    /**
     * 
     * @type {string}
     * @memberof Token
     */
    symbol: string;
    /**
     * 
     * @type {string}
     * @memberof Token
     */
    address: string;
    /**
     * 
     * @type {string}
     * @memberof Token
     */
    type: string;
    /**
     * 
     * @type {number}
     * @memberof Token
     */
    holders: number;
    /**
     * 
     * @type {string}
     * @memberof Token
     */
    exchangeRate: string;
    /**
     * 
     * @type {string}
     * @memberof Token
     */
    totalSupply: string;
}

/**
 * Check if a given object implements the Token interface.
 */
export function instanceOfToken(value: object): boolean {
    if (!('name' in value)) return false;
    if (!('decimals' in value)) return false;
    if (!('symbol' in value)) return false;
    if (!('address' in value)) return false;
    if (!('type' in value)) return false;
    if (!('holders' in value)) return false;
    if (!('exchangeRate' in value)) return false;
    if (!('totalSupply' in value)) return false;
    return true;
}

export function TokenFromJSON(json: any): Token {
    return TokenFromJSONTyped(json, false);
}

export function TokenFromJSONTyped(json: any, ignoreDiscriminator: boolean): Token {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'],
        'decimals': json['decimals'],
        'symbol': json['symbol'],
        'address': json['address'],
        'type': json['type'],
        'holders': json['holders'],
        'exchangeRate': json['exchange_rate'],
        'totalSupply': json['total_supply'],
    };
}

export function TokenToJSON(value?: Token | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'name': value['name'],
        'decimals': value['decimals'],
        'symbol': value['symbol'],
        'address': value['address'],
        'type': value['type'],
        'holders': value['holders'],
        'exchange_rate': value['exchangeRate'],
        'total_supply': value['totalSupply'],
    };
}
