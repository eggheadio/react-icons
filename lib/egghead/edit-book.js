'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactIconBase = require('react-icon-base');

var _reactIconBase2 = _interopRequireDefault(_reactIconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EggheadEditBook = function EggheadEditBook(props) {
  return _react2.default.createElement(
    _reactIconBase2.default,
    _extends({ viewBox: '0 0 42 31' }, props),
    _react2.default.createElement(
      'g',
      null,
      _react2.default.createElement(
        'g',
        { fillRule: 'evenodd' },
        _react2.default.createElement(
          'g',
          { transform: 'translate(4 5)' },
          _react2.default.createElement('rect', { width: '10', height: '2', x: '10', y: '5', rx: '1' }),
          _react2.default.createElement('rect', { width: '10', height: '2', x: '10', rx: '1' }),
          _react2.default.createElement('path', { d: 'M2.17468976,0.207903385 L6.40081035,2.92167473 C6.75122324,3.14668971 6.8490412,3.60731376 6.61929286,3.95050733 C6.56222299,4.03575719 6.4878535,4.1085945 6.40081035,4.1644886 L2.17468976,6.87825994 C1.82427687,7.10327492 1.35396327,7.00747225 1.12421494,6.66427867 C1.04317284,6.54321957 1,6.40161243 1,6.256853 L1,0.82931032 C1,0.418928093 1.3396787,0.0862475656 1.7586936,0.0862475656 C1.90649814,0.0862475656 2.05108409,0.128530943 2.17468976,0.207903385 Z' }),
          _react2.default.createElement('rect', { width: '20', height: '2', y: '10', rx: '1' })
        ),
        _react2.default.createElement('rect', { width: '29', height: '27', x: '1', y: '1', stroke: '#FFF', strokeWidth: '2', rx: '3' }),
        _react2.default.createElement('rect', { width: '5', height: '2', x: '3', y: '24', rx: '1' }),
        _react2.default.createElement('path', { stroke: '#FFF', strokeWidth: '2', d: 'M1,22 L30,22 L30,3.8458278 C30,2.77756757 29.9265592,2.39725995 29.7174877,2.0063303 C29.5492269,1.69170989 29.3082901,1.45077309 28.9936697,1.28251225 C28.60274,1.07344079 28.2224324,1 27.1541722,1 L3.8458278,1 C2.77756757,1 2.39725995,1.07344079 2.0063303,1.28251225 C1.69170989,1.45077309 1.45077309,1.69170989 1.28251225,2.0063303 C1.07344079,2.39725995 1,2.77756757 1,3.8458278 L1,22 Z' }),
        _react2.default.createElement(
          'g',
          { transform: 'translate(20 9)' },
          _react2.default.createElement('circle', { cx: '11', cy: '11', r: '11' }),
          _react2.default.createElement(
            'g',
            { transform: 'translate(5 5)' },
            _react2.default.createElement('polygon', { points: '.685 9.6 0 12 2.4 11.315' }),
            _react2.default.createElement('polygon', { points: '1.2 8.451 7.2 2.4 9.6 4.749 3.6 10.8' }),
            _react2.default.createElement('polygon', { points: '8.4 1.233 9.644 0 12 2.367 10.756 3.6' })
          )
        )
      )
    )
  );
};

exports.default = EggheadEditBook;
module.exports = exports['default'];