/*
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// TypeScript Version: 4.1

/**
* Evaluates the quantile function for a binomial distribution.
*
* ## Notes
*
* -   If `r < 0` or `r > 1`, the function returns `NaN`.
*
* @param r - input value
* @returns evaluated quantile function
*/
type Unary = ( r: number ) => number;

/**
* Interface for the quantile function of a binomial distribution.
*/
interface Quantile {
	/**
	* Evaluates the quantile function for a binomial distribution with number of trials `n` and success probability `p` at a probability `r`.
	*
	* ## Notes
	*
	* -   If `r < 0` or `r > 1`, the function returns `NaN`.
	* -   If provided a number of trials `n` which is not a nonnegative integer, the function returns `NaN`.
	* -   If `p < 0` or `p > 1`, the function returns `NaN`.
	*
	* @param r - input value
	* @param n - number of trials
	* @param p  - success probability
	* @returns evaluated quantile function
	*
	* @example
	* var y = quantile( 0.4, 20, 0.2 );
	* // returns 3
	*
	* @example
	* var y = quantile( 0.8, 20, 0.2 );
	* // returns 5
	*
	* @example
	* var y = quantile( 0.5, 10, 0.4 );
	* // returns 4
	*
	* @example
	* var y = quantile( 0.0, 10, 0.4 );
	* // returns 0
	*
	* @example
	* var y = quantile( 1.0, 10, 0.4 );
	* // returns 10
	*
	* @example
	* var y = quantile( NaN, 20, 0.5 );
	* // returns NaN
	*
	* @example
	* var y = quantile( 0.2, NaN, 0.5 );
	* // returns NaN
	*
	* @example
	* var y = quantile( 0.2, 20, NaN );
	* // returns NaN
	*
	* @example
	* var y = quantile( 0.5, 1.5, 0.5 );
	* // returns NaN
	*
	* @example
	* var y = quantile( 0.5, -2.0, 0.5 );
	* // returns NaN
	*
	* @example
	* var y = quantile( 0.5, 20, -1.0 );
	* // returns NaN
	*
	* @example
	* var y = quantile( 0.5, 20, 1.5 );
	* // returns NaN
	*/
	( r: number, n: number, p: number ): number;

	/**
	* Returns a function for evaluating the quantile function for a binomial distribution with number of trials `n` and success probability `p`.
	*
	* @param n - number of trials
	* @param p - success probability
	* @returns quantile function
	*
	* @example
	* var myQuantile = quantile.factory( 10, 0.5 );
	* var y = myQuantile( 0.1 );
	* // returns 3
	*
	* y = myQuantile( 0.9 );
	* // returns 7
	*/
	factory( n: number, p: number ): Unary;
}

/**
* Binomial distribution quantile function.
*
* @param p - input value
* @param n - number of trials
* @param p - success probability
* @returns evaluated quantile function
*
* @example
* var y = quantile( 0.4, 20, 0.2 );
* // returns 2
*
* y = quantile( 0.8, 20, 0.2 );
* // returns 5
*
* y = quantile( 0.5, 10, 0.4 );
* // returns 4
*
* var myQuantile = quantile.factory( 10, 0.5 );
*
* y = myQuantile( 0.1 );
* // returns 3
*
* y = myQuantile( 0.9 );
* // returns 7
*/
declare var quantile: Quantile;


// EXPORTS //

export = quantile;