2D Point
========

##### Create and manipulate 2d point object.

Installation
============

Available as a node package. To install use

```
$ npm install 2d-point
```

Methods
=======

The following methods are available.
- [create](#user-content-create-pointcreatex-y)
- [add](#user-content-add-pointaddp-q)
- [multiply](#user-content-subtract-pointsubtractp-q)
- [subtract](#user-content-multiply-pointmultiplya-p)
- [fitWithin](#user-content-fitwithin-pointfitwithincontainer-vector)
- [fitOnce](#user-content-fitonce-pointfitwithincontainer-vector)

Use
===

#### create `Point.create(x, y)`
Creates a frozen 2D point. Defaults to origin coordinate if no arguments given.

```js
var Point = require('2d-point');

var pt = Point.create(2, 4);
// => {x: 2, y: 4}

var origin = Point.create();
// => {x: 0, y: 0}
```

#### add `Point.add(p, q)`
Vector add two points returning a new point.

```js
var p = Point.create(2, 3);
var q = Point.create(4, 5);

Point.add(p, q);
// => {x: 6, y: 8}
```

#### subtract `Point.subtract(p, q)`
Vector subtract two points returning a new point.

```js
var p = Point.create(2, 3);
var q = Point.create(4, 5);

Point.subtract(p, q);
// => {x: -2, y: -2}
```

#### multiply `Point.multiply(a, p)`
Vector scalar multiply a point returning a new point.

```js
var a = 3;
var p = Point.create(2, 3);

Point.multiply(a, p);
// => {x: 6, y: 9}
```

#### fitWithin `Point.fitWithin(container, vector)`
Scales vector to fit just within the bounding box of the container point.

```js
var container = Point.create(2, 2);
var landscape = Point.create(8, 4);
var portrait = Point.create(0.5, 1);

Point.fitWithin(container, landscape);
// => {x: 2, y: 1}

Point.fitWithin(container, portrait);
// => {x: 1, y: 2}
```

#### fitOnce `Point.fitWithin(container, vector)`
Scales vector to fit just within on dimension of the bounding box of the container point.

```js
var container = Point.create(2, 2);
var landscape = Point.create(8, 4);
var portrait = Point.create(0.5, 1);

Point.fitWithin(container, landscape);
// => {x: 4, y: 2}

Point.fitWithin(container, portrait);
// => {x: 2, y: 4}
```

## Considered extensions 

- fit within to deal with zeros ?
- negate ?
- Curry methods ?
- comparison methods ?
- conditionally make svg point if available ? No
- tests in browser ? No
- dot product ?
- convert to radial ? No
- furthest ?
- nearest ?
