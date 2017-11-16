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

var EggheadThinHamburger = function EggheadThinHamburger(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 10 14' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { 'fill-rule': 'evenodd', d: 'M1,0 L8.63265306,0 C9.18493781,-1.01453063e-16 9.63265306,0.44771525 9.63265306,1 L9.63265306,1 C9.63265306,1.55228475 9.18493781,2 8.63265306,2 L1,2 C0.44771525,2 6.76353751e-17,1.55228475 0,1 L0,1 L0,1 C-6.76353751e-17,0.44771525 0.44771525,1.01453063e-16 1,0 L1,0 Z M1,6 L8.63265306,6 C9.18493781,6 9.63265306,6.44771525 9.63265306,7 C9.63265306,7.55228475 9.18493781,8 8.63265306,8 L1,8 C0.44771525,8 6.76353751e-17,7.55228475 0,7 C-6.76353751e-17,6.44771525 0.44771525,6 1,6 L1,6 Z M1,12 L8.63265306,12 C9.18493781,12 9.63265306,12.4477153 9.63265306,13 C9.63265306,13.5522847 9.18493781,14 8.63265306,14 L1,14 C0.44771525,14 6.76353751e-17,13.5522847 0,13 C-6.76353751e-17,12.4477153 0.44771525,12 1,12 L1,12 Z', opacity: '.6' })
        )
    );
};

exports.default = EggheadThinHamburger;
module.exports = exports['default'];