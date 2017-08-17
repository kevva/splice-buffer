# splice-buffer [![Build Status](https://travis-ci.org/kevva/splice-buffer.svg?branch=master)](https://travis-ci.org/kevva/splice-buffer)

> Remove or replace part of a `Buffer` like `Array#splice`


## Install

```
$ npm install splice-buffer
```


## Usage

```js
const spliceBuffer = require('splice-buffer');

spliceBuffer('unicorn', 3, 4, 'verse');
//=> 'universe'
```


## API

### spliceBuffer(input, index, count, [insert])

#### input

Type: `Buffer`

#### index

Type: `number`

Index to start splicing.

#### count

Type: `number`

Number of characters to remove.

#### insert

Type: `string`

String to insert in place of the removed `Buffer`.


## Related

* [replace-buffer](https://github.com/kevva/replace-buffer) - Replace matches in a `Buffer`


## License

MIT © [Kevin Mårtensson](http://github.com/kevva)
