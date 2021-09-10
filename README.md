Javascript Feature Flags
========================

This Javascript function gets Feature Flags set in the URL (as fragment and/or query string), set in a browser cookie, and/or via matching a domain name (e.g., localhost, or your test domain name).

## What are Feature Flags

A *Feature Flag* is a setting you use to turn a feature on or off. This is often used to turn on experimental features in your code, e.g., for testing.

## #Example

```html
if ( ff.flag('exp') ) {
    doExperiment();
} else {
    doReallySafeStuff();
}
```

## And This Respository Is...

This is a Javascript function that reads feature flags in URL Fragments, query strings, browser cookies, and/or a test domain name. These are only "on" flags--they do not represent values or states beyond "on".

The idea is: when a flag is absent, it is *off*, When a flag is present, it is *on*.

The function then allows you to test for specific flags being present / on, using the above **ff.flag('your-flag-name')** syntax.

This function has no dependencies on other JS libaries, and should work on all modern desktop browsers (and IE 9; it does **not** work on IE8 or earlier).

Note that this library doesn't help you set flags per se--it just reads them.


## Basic Usage

```html
<script src="feature-flags.js"></script>
<script>
    if ( ff.flag('your-flag-name') ) {
        console.log('the your-flag-name flag is set!');
    }
</script>
```

## Advanced Usage

Take a look at the [feature-flags.js](feature-flags.js) file. This file can be integrated into your existing Javascript library, and you may change the global variable name (which is ff), or attach this function to an existing global, and override any of the following:

```javascript
(ff, {
keyName: 'ff',
testDomain: 'localhost',
testDomainFlag: 'debug',
methods: ['cookie', 'domain', 'hash', 'query'])
```

## Flag Syntax

This function recognizes as flags parameters that use a consistent "key" name format. The **keyName** defaults to **ff**, but you can easily change this via the  [Advance Usage](#advanced-usage) options.

Note that comma separated values are always turned into separate flags.

Syntax examples (todo: document a bit more)

### Query Strings

All valid:

````
?ff=Kurt
?ff=Bertolt&ff=Kurt
?ff=Elvin,Ringo
?ff=Jimi,Eddie&ff=George,Sonny
````

### Fragments

All valid:

````
#ff,Kurt
#ff,Elvin,Ringo
````

### Cookies

The function will set flags based on a cookie set with the keyName (e.g., **ff**). The cookie may contain either a single value, or multiple comma separated values.


### Test Domain

By default, if the page is being browsed on localhost, a flag named debug will be set. Via the [Advance Usage](#advanced-usage) examples above, you can change this to match your test domain name, and change the flag that is set.


##Example

See the [index.html](http://jayf.github.io/javascript-feature-flags/index.html) page for more examples.

## Enhancements

Some ideas are in [issues/enhancements](https://github.com/jayf/javascript-feature-flags/issues?labels=enhancement&page=1&state=open) -- feel free to add suggestions, or fork and submit your own.

## See Also: PHP Feature Flags

I've also created a simple Feature Flags class in PHP, see [PHP Feature Flags](https://github.com/jayf/php-feature-flags). *Note that these two libraries don't have 100% matching flag syntax--that's a TODO. Currently, the JS library's flag syntax is superset of the PHP's.*

