/**
 * (c) 2010-2017 Torstein Honsi
 *
 * License: www.highcharts.com/license
 */
'use strict';
/* global win */
var doc = win.document,
	SVG_NS = 'http://www.w3.org/2000/svg',
	userAgent = (win.navigator && win.navigator.userAgent) || '',
	svg = doc && doc.createElementNS && !!doc.createElementNS(SVG_NS, 'svg').createSVGRect,
	isMS = /(edge|msie|trident)/i.test(userAgent) && !win.opera,
	isFirefox = /Firefox/.test(userAgent),
	hasBidiBug = isFirefox && parseInt(userAgent.split('Firefox/')[1], 10) < 4; // issue #38

var Highcharts = win.Highcharts ? win.Highcharts.error(16, true) : {
	product: '@product.name@',
	version: '@product.version@',
	deg2rad: Math.PI * 2 / 360,
	doc: doc,
	hasBidiBug: hasBidiBug,
	hasTouch: doc && doc.documentElement.ontouchstart !== undefined,
	isMS: isMS,
	isWebKit: /AppleWebKit/.test(userAgent),
	isFirefox: isFirefox,
	isTouchDevice: /(Mobile|Android|Windows Phone)/.test(userAgent),
	SVG_NS: SVG_NS,
	chartCount: 0,
	seriesTypes: {},
	symbolSizes: {},
	svg: svg,
	win: win,
	marginNames: ['plotTop', 'marginRight', 'marginBottom', 'plotLeft'],
	noop: function () {
		return undefined;
	},
	/**
	 * 包含当前页面所有图表对象的数组。
	 * 
	 * 图表对象的顺序贯穿整个页面的生命周期，当某个图表被销毁后，该数组中对应的值会变成 `undefined`
	 * @type {Array.<Highcharts.Chart>}
	 * @memberOf Highcharts
	 */
	charts: []
};
export default Highcharts;
