# iter-count

## Description

Count items in iterable.

Second implementation will count unique items and group them (similar to `uniq -c`).

## Install

```bash
bun add @fightingdreamer/iter-count
```

## Usage

```js
import {count} from '@fightingdreamer/iter-count'

const value = ['a', 'a', 'b'][Symbol.iterator]()
const result = count(value)
const expect = 3
console.assert(result == expect)
```

```js
import {countUnique} from '@fightingdreamer/iter-count'

const value = ['a', 'a', 'b'][Symbol.iterator]()
const result = countUnique(value)
const expect = new Map([['a', 2], ['b', 1]])
for (const [key, value] of expect.entries()) {
  console.assert(result.get(key) == value)
}
```

## Usage (node / commonjs)

```js
const {count} = require('@fightingdreamer/iter-count')

const value = ['a', 'a', 'b'][Symbol.iterator]()
const result = count(value)
const expect = 3
assert(result == expect)
```

```js
const {countUnique} = require('@fightingdreamer/iter-count')

const value = ['a', 'a', 'b'][Symbol.iterator]()
const result = countUnique(value)
const expect = new Map([['a', 2], ['b', 1]])
for (const [key, value] of expect.entries()) {
  assert(result.get(key) == value)
}
```

## Functions

```js
function count<T>(iterator: Iterable<T>): number
```

Will count items in iterator.

```js
function countUnique<T>(iterator: Iterable<T>): Map<T, number>
```

Will count items in iterator and group them into Map.
