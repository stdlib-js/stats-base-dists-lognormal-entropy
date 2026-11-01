"use strict";var a=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(u){throw (r=0, u)}};};var n=a(function(x,i){
var t=require('@stdlib/math-base-assert-is-nan/dist'),q=require('@stdlib/math-base-special-exp/dist'),s=require('@stdlib/math-base-special-ln/dist'),v=require('@stdlib/constants-float64-sqrt-two-pi/dist');function o(e,r){return t(e)||t(r)||r<=0?NaN:s(r*q(e+.5)*v)}i.exports=o
});var p=n();module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
