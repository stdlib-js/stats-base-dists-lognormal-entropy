// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var n=function(n){return n!=n},r=Math.floor,t=Math.ceil,o=r,e=t;var u=function(n){return n<0?e(n):o(n)},a=Number.NEGATIVE_INFINITY,i=Number.POSITIVE_INFINITY,f=i,c=a;var y=function(n){return n===f||n===c};var v=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var l=function(){return v&&"symbol"==typeof Symbol.toStringTag},p=Object.prototype.toString,A=p;var w=function(n){return A.call(n)},b=Object.prototype.hasOwnProperty;var U=function(n,r){return null!=n&&b.call(n,r)},m="function"==typeof Symbol?Symbol.toStringTag:"",h=U,I=m,N=p;var d=w,s=function(n){var r,t,o;if(null==n)return N.call(n);t=n[I],r=h(n,I);try{n[I]=void 0}catch(r){return N.call(n)}return o=N.call(n),r?n[I]=t:delete n[I],o},F=l()?s:d,S=F,H="function"==typeof Uint32Array;var O="function"==typeof Uint32Array?Uint32Array:null,g=function(n){return H&&n instanceof Uint32Array||"[object Uint32Array]"===S(n)},E=O;var j=function(){var n,r;if("function"!=typeof E)return!1;try{r=new E(r=[1,3.14,-3.14,4294967296,4294967297]),n=g(r)&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n};var T="function"==typeof Uint32Array?Uint32Array:void 0,G=function(){throw new Error("not implemented")},L=j()?T:G,W=F,M="function"==typeof Float64Array;var x="function"==typeof Float64Array?Float64Array:null,P=function(n){return M&&n instanceof Float64Array||"[object Float64Array]"===W(n)},V=x;var Y=function(){var n,r;if("function"!=typeof V)return!1;try{r=new V([1,3.14,-3.14,NaN]),n=P(r)&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){n=!1}return n};var _="function"==typeof Float64Array?Float64Array:void 0,k=function(){throw new Error("not implemented")},q=Y()?_:k,z=F,B="function"==typeof Uint8Array;var C="function"==typeof Uint8Array?Uint8Array:null,D=function(n){return B&&n instanceof Uint8Array||"[object Uint8Array]"===z(n)},J=C;var K=function(){var n,r;if("function"!=typeof J)return!1;try{r=new J(r=[1,3.14,-3.14,256,257]),n=D(r)&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n};var Q="function"==typeof Uint8Array?Uint8Array:void 0,R=function(){throw new Error("not implemented")},X=K()?Q:R,Z=F,$="function"==typeof Uint16Array;var nn="function"==typeof Uint16Array?Uint16Array:null,rn=function(n){return $&&n instanceof Uint16Array||"[object Uint16Array]"===Z(n)},tn=nn;var on=function(){var n,r;if("function"!=typeof tn)return!1;try{r=new tn(r=[1,3.14,-3.14,65536,65537]),n=rn(r)&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n};var en,un="function"==typeof Uint16Array?Uint16Array:void 0,an=function(){throw new Error("not implemented")},fn={uint16:on()?un:an,uint8:X};(en=new fn.uint16(1))[0]=4660;var cn,yn,vn=52===new fn.uint8(en.buffer)[0];!0===vn?(cn=1,yn=0):(cn=0,yn=1);var ln=L,pn={HIGH:cn,LOW:yn},An=new q(1),wn=new ln(An.buffer),bn=pn.HIGH,Un=pn.LOW;var mn=function(n,r){return An[0]=r,n[0]=wn[bn],n[1]=wn[Un],n};var hn=function(n,r){return 1===arguments.length?mn([0,0],n):mn(n,r)},In=L,Nn=!0===vn?1:0,dn=new q(1),sn=new In(dn.buffer);var Fn,Sn,Hn=function(n){return dn[0]=n,sn[Nn]};!0===vn?(Fn=1,Sn=0):(Fn=0,Sn=1);var On=L,gn={HIGH:Fn,LOW:Sn},En=new q(1),jn=new On(En.buffer),Tn=gn.HIGH,Gn=gn.LOW;var Ln=function(n,r){return jn[Tn]=n,jn[Gn]=r,En[0]},Wn=hn,Mn=Hn,xn=Ln,Pn=[0,0];var Vn=y,Yn=n,_n=function(n){return Math.abs(n)};var kn=function(n,r){return Yn(r)||Vn(r)?(n[0]=r,n[1]=0,n):0!==r&&_n(r)<22250738585072014e-324?(n[0]=4503599627370496*r,n[1]=-52,n):(n[0]=r,n[1]=0,n)};var qn=Hn;var zn=function(n){var r=qn(n);return(r=(2146435072&r)>>>20)-1023|0},Bn=i,Cn=a,Dn=n,Jn=y,Kn=function(n,r){var t,o;return Wn(Pn,n),t=Pn[0],t&=2147483647,o=Mn(r),xn(t|=o&=2147483648,Pn[1])},Qn=function(n,r){return 1===arguments.length?kn([0,0],n):kn(n,r)},Rn=zn,Xn=hn,Zn=Ln,$n=[0,0],nr=[0,0];var rr=function(n,r){var t,o;return 0===r||0===n||Dn(n)||Jn(n)?n:(Qn($n,n),r+=$n[1],(r+=Rn(n=$n[0]))<-1074?Kn(0,n):r>1023?n<0?Cn:Bn:(r<=-1023?(r+=52,o=2220446049250313e-31):o=1,Xn(nr,n),t=nr[0],t&=2148532223,o*Zn(t|=r+1023<<20,nr[1])))};var tr=rr,or=function(n){return 0===n?.16666666666666602:.16666666666666602+n*(n*(6613756321437934e-20+n*(4.1381367970572385e-8*n-16533902205465252e-22))-.0027777777777015593)};var er=n,ur=u,ar=a,ir=i,fr=function(n,r,t){var o,e,u;return u=(o=n-r)-(e=o*o)*or(e),tr(1-(r-o*u/(2-u)-n),t)};var cr=function(n){var r;return er(n)||n===ir?n:n===ar?0:n>709.782712893384?ir:n<-745.1332191019411?0:n>-3.725290298461914e-9&&n<3.725290298461914e-9?1+n:(r=ur(n<0?1.4426950408889634*n-.5:1.4426950408889634*n+.5),fr(n-.6931471803691238*r,1.9082149292705877e-10*r,r))},yr=L,vr=!0===vn?1:0,lr=new q(1),pr=new yr(lr.buffer);var Ar=function(n,r){return lr[0]=n,pr[vr]=r>>>0,lr[0]};var wr=Hn,br=Ar,Ur=n,mr=a,hr=function(n){return 0===n?.3999999999940942:.3999999999940942+n*(.22222198432149784+.15313837699209373*n)},Ir=function(n){return 0===n?.6666666666666735:.6666666666666735+n*(.2857142874366239+n*(.1818357216161805+.14798198605116586*n))},Nr=.6931471803691238,dr=1.9082149292705877e-10;var sr=function(n){var r,t,o,e,u,a,i,f,c,y,v;return 0===n?mr:Ur(n)||n<0?NaN:(e=0,(t=wr(n))<1048576&&(e-=54,t=wr(n*=0x40000000000000)),t>=2146435072?n+n:(e+=(t>>20)-1023|0,e+=(i=(t&=1048575)+614244&1048576|0)>>20|0,a=(n=br(n,t|1072693248^i))-1,(1048575&2+t)<3?0===a?0===e?0:e*Nr+e*dr:(u=a*a*(.5-.3333333333333333*a),0===e?a-u:e*Nr-(u-e*dr-a)):(i=t-398458|0,f=440401-t|0,o=(y=(v=(c=a/(2+a))*c)*v)*hr(y),u=v*Ir(y)+o,(i|=f)>0?(r=.5*a*a,0===e?a-(r-c*(r+u)):e*Nr-(r-(c*(r+u)+e*dr)-a)):0===e?a-c*(a-u):e*Nr-(c*(a-u)-e*dr-a))))};function Fr(r,t){return n(r)||n(t)||t<=0?NaN:sr(t*cr(r+.5)*2.5066282746310007)}export{Fr as default};
//# sourceMappingURL=mod.js.map
