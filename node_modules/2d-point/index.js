'use strict';

function Point(x, y) {
    this.x = x || 0;
    this.y = y || 0;
    Object.freeze(this);
}

exports.create = function (x, y) {
    return new Point(x, y);
};

exports.isPoint = function (obj) {
    return (obj.constructor === Point);
};

exports.add = function (p, q) {
    return new Point(p.x + q.x, p.y + q.y);
};

exports.subtract = function (p, q) {
    return new Point(p.x - q.x, p.y - q.y);
};

exports.multiply = function (a, p) {
    return new Point(a * p.x, a * p.y);
};

exports.fitWithin = function (p, q) {
    var xScale = p.x / q.x,
        yScale = p.y / q.y,
        scale = xScale > yScale ? yScale : xScale;

    return exports.multiply(scale, q);
};

exports.fitOnce = function (p, q) {
    var xScale = p.x / q.x,
        yScale = p.y / q.y,
        scale = xScale < yScale ? yScale : xScale;

    return exports.multiply(scale, q);
};