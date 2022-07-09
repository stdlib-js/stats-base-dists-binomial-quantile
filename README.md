<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Quantile Function

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Binomial][binomial-distribution] distribution [quantile function][quantile-function].

<section class="intro">

The [quantile function][quantile-function] for a [binomial][binomial-distribution] random variable returns, for any `r` satisfying `0 <= r <= 1`, the value `x` for which the relation

<!-- <equation class="equation" label="eq:binomial_quantile_function" align="center" raw="F(x-1;n,p) < r \le F(x;n,p)" alt="Quantile value for a binomial distribution."> -->

<div class="equation" align="center" data-raw-text="F(x-1;n,p) &lt; r \le F(x;n,p)" data-equation="eq:binomial_quantile_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/binomial/quantile/docs/img/equation_binomial_quantile_function.svg" alt="Quantile value for a binomial distribution.">
    <br>
</div>

<!-- </equation> -->

holds, where `F` is the cumulative distribution function (CDF) of a binomial random variable, `n` is the number of trials, and `0 <= p <= 1` is the success probability.

</section>

<!-- /.intro -->



<section class="usage">

## Usage

To use in Observable,

```javascript
quantile = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-binomial-quantile@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var quantile = require( 'path/to/vendor/umd/stats-base-dists-binomial-quantile/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-binomial-quantile@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.quantile;
})();
</script>
```

#### quantile( r, n, p )

Evaluates the [quantile function][quantile-function] for a [binomial][binomial-distribution] distribution with number of trials `n` and success probability `p` at value `r`.

```javascript
var y = quantile( 0.4, 20, 0.2 );
// returns 3

y = quantile( 0.8, 20, 0.2 );
// returns 5

y = quantile( 0.5, 10, 0.4 );
// returns 4

y = quantile( 0.0, 10, 0.4 );
// returns 0

y = quantile( 1.0, 10, 0.4 );
// returns 10
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = quantile( NaN, 20, 0.5 );
// returns NaN

y = quantile( 0.2, NaN, 0.5 );
// returns NaN

y = quantile( 0.2, 20, NaN );
// returns NaN
```

If provided a number of trials `n` which is not a nonnegative integer, the function returns `NaN`.

```javascript
var y = quantile( 0.5, 1.5, 0.5 );
// returns NaN

y = quantile( 0.5, -2.0, 0.5 );
// returns NaN
```

If provided a success probability `p` outside of `[0,1]`, the function returns `NaN`.

```javascript
var y = quantile( 0.5, 20, -1.0 );
// returns NaN

y = quantile( 0.5, 20, 1.5 );
// returns NaN
```

#### quantile.factory( n, p )

Returns a function for evaluating the [quantile function][quantile-function] of a [binomial][binomial-distribution] distribution with number of trials `n` and success probability `p`.

```javascript
var myquantile = quantile.factory( 10, 0.5 );

var y = myquantile( 0.1 );
// returns 3

y = myquantile( 0.9 );
// returns 7
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-round@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-binomial-quantile@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var r;
var i;
var n;
var p;
var y;

for ( i = 0; i < 10; i++ ) {
    r = randu();
    n = round( randu() * 100.0 );
    p = randu();
    y = quantile( r, n, p );
    console.log( 'r: %d, n: %d, p: %d, Q(r;n,p): %d', r.toFixed( 4 ), n, p.toFixed( 4 ) );
}

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-binomial-quantile.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-binomial-quantile

[test-image]: https://github.com/stdlib-js/stats-base-dists-binomial-quantile/actions/workflows/test.yml/badge.svg?branch=v0.0.7
[test-url]: https://github.com/stdlib-js/stats-base-dists-binomial-quantile/actions/workflows/test.yml?query=branch:v0.0.7

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-binomial-quantile/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-binomial-quantile?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-binomial-quantile.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-binomial-quantile/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-binomial-quantile/tree/deno
[umd-url]: https://github.com/stdlib-js/stats-base-dists-binomial-quantile/tree/umd
[esm-url]: https://github.com/stdlib-js/stats-base-dists-binomial-quantile/tree/esm
[branches-url]: https://github.com/stdlib-js/stats-base-dists-binomial-quantile/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-binomial-quantile/main/LICENSE

[binomial-distribution]: https://en.wikipedia.org/wiki/Binomial_distribution

[quantile-function]: https://en.wikipedia.org/wiki/Quantile_function

</section>

<!-- /.links -->
