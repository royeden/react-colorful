import e,{useRef as r,useMemo as t,useEffect as n,useState as o,useCallback as a,useLayoutEffect as l}from"react";function u(){return(u=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function c(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r.indexOf(t=a[n])>=0||(o[t]=e[t]);return o}function i(e){var t=r(e),n=r(function(e){t.current&&t.current(e)});return t.current=e,n.current}var s=function(e,r,t){return void 0===r&&(r=0),void 0===t&&(t=1),e>t?t:e<r?r:e},f=function(e){return"touches"in e},v=function(e){return e&&e.ownerDocument.defaultView||self},d=function(e,r,t){var n=e.getBoundingClientRect(),o=f(r)?function(e,r){for(var t=0;t<e.length;t++)if(e[t].identifier===r)return e[t];return e[0]}(r.touches,t):r;return{left:s((o.pageX-(n.left+v(e).pageXOffset))/n.width),top:s((o.pageY-(n.top+v(e).pageYOffset))/n.height)}},h=function(e){!f(e)&&e.preventDefault()},m=e.memo(function(o){var a=o.onMove,l=o.onKey,s=c(o,["onMove","onKey"]),m=r(null),g=i(a),p=i(l),b=r(null),_=r(!1),x=t(function(){var e=function(e){h(e),(f(e)?e.touches.length>0:e.buttons>0)&&m.current?g(d(m.current,e,b.current)):t(!1)},r=function(){return t(!1)};function t(t){var n=_.current,o=v(m.current),a=t?o.addEventListener:o.removeEventListener;a(n?"touchmove":"mousemove",e),a(n?"touchend":"mouseup",r)}return[function(e){var r=e.nativeEvent,n=m.current;if(n&&(h(r),!function(e,r){return r&&!f(e)}(r,_.current)&&n)){if(f(r)){_.current=!0;var o=r.changedTouches||[];o.length&&(b.current=o[0].identifier)}n.focus(),g(d(n,r,b.current)),t(!0)}},function(e){var r=e.which||e.keyCode;r<37||r>40||(e.preventDefault(),p({left:39===r?.05:37===r?-.05:0,top:40===r?.05:38===r?-.05:0}))},t]},[p,g]),E=x[0],C=x[1],w=x[2];return n(function(){return w},[w]),e.createElement("div",u({onTouchStart:E,onMouseDown:E,className:"react-colorful__interactive",ref:m,onKeyDown:C,tabIndex:0,role:"slider"},s))}),g=function(e){return e.filter(Boolean).join(" ")},p=function(r){var t=r.color,n=r.left,o=r.top,a=void 0===o?.5:o,l=g(["react-colorful__pointer",r.className]);return e.createElement("div",{className:l,style:{top:100*a+"%",left:100*n+"%"}},e.createElement("div",{className:"react-colorful__pointer-fill",style:{backgroundColor:t}}))},b=function(e,r,t){return void 0===r&&(r=0),void 0===t&&(t=Math.pow(10,r)),Math.round(t*e)/t},_={grad:.9,turn:360,rad:360/(2*Math.PI)},x=function(e){return"#"===e[0]&&(e=e.substring(1)),e.length<6?{r:parseInt(e[0]+e[0],16),g:parseInt(e[1]+e[1],16),b:parseInt(e[2]+e[2],16),a:1}:{r:parseInt(e.substring(0,2),16),g:parseInt(e.substring(2,4),16),b:parseInt(e.substring(4,6),16),a:1}},E=function(e,r){return void 0===r&&(r="deg"),Number(e)*(_[r]||1)},C=function(e){var r=/hsla?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e);return r?H({h:E(r[1],r[2]),s:Number(r[3]),l:Number(r[4]),a:void 0===r[5]?1:Number(r[5])/(r[6]?100:1)}):{h:0,s:0,v:0,a:1}},w=C,H=function(e){var r=e.s,t=e.l;return{h:e.h,s:(r*=(t<50?t:100-t)/100)>0?2*r/(t+r)*100:0,v:t+r,a:e.a}},M=function(e){var r=e.s,t=e.v,n=e.a,o=(200-r)*t/100;return{h:b(e.h),s:b(o>0&&o<200?r*t/100/(o<=100?o:200-o)*100:0),l:b(o/2),a:b(n,2)}},N=function(e){var r=M(e);return"hsl("+r.h+", "+r.s+"%, "+r.l+"%)"},y=function(e){var r=M(e);return"hsla("+r.h+", "+r.s+"%, "+r.l+"%, "+r.a+")"},q=function(e){var r=e.h,t=e.s,n=e.v,o=e.a;r=r/360*6,t/=100,n/=100;var a=Math.floor(r),l=n*(1-t),u=n*(1-(r-a)*t),c=n*(1-(1-r+a)*t),i=a%6;return{r:b(255*[n,u,l,l,c,n][i]),g:b(255*[c,n,n,u,l,l][i]),b:b(255*[l,l,c,n,n,u][i]),a:b(o,2)}},k=function(e){var r=/hsva?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e);return r?D({h:E(r[1],r[2]),s:Number(r[3]),v:Number(r[4]),a:void 0===r[5]?1:Number(r[5])/(r[6]?100:1)}):{h:0,s:0,v:0,a:1}},O=k,I=function(e){var r=/rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e);return r?B({r:Number(r[1])/(r[2]?100/255:1),g:Number(r[3])/(r[4]?100/255:1),b:Number(r[5])/(r[6]?100/255:1),a:void 0===r[7]?1:Number(r[7])/(r[8]?100:1)}):{h:0,s:0,v:0,a:1}},j=I,z=function(e){var r=e.toString(16);return r.length<2?"0"+r:r},B=function(e){var r=e.r,t=e.g,n=e.b,o=e.a,a=Math.max(r,t,n),l=a-Math.min(r,t,n),u=l?a===r?(t-n)/l:a===t?2+(n-r)/l:4+(r-t)/l:0;return{h:b(60*(u<0?u+6:u)),s:b(a?l/a*100:0),v:b(a/255*100),a:o}},D=function(e){return{h:b(e.h),s:b(e.s),v:b(e.v),a:b(e.a,2)}},K=e.memo(function(r){var t=r.hue,n=r.onChange,o=g(["react-colorful__hue",r.className]);return e.createElement("div",{className:o},e.createElement(m,{onMove:function(e){n({h:360*e.left})},onKey:function(e){n({h:s(t+360*e.left,0,360)})},"aria-label":"Hue","aria-valuenow":b(t),"aria-valuemax":360,"aria-valuemin":0},e.createElement(p,{className:"react-colorful__hue-pointer",left:t/360,color:N({h:t,s:100,v:100,a:1})})))}),L=e.memo(function(r){var t=r.hsva,n=r.onChange,o={backgroundColor:N({h:t.h,s:100,v:100,a:1})};return e.createElement("div",{className:"react-colorful__saturation",style:o},e.createElement("div",{role:"grid","aria-rowcount":100,"aria-label":"Saturation and Brightness"},e.createElement("div",{role:"row","aria-rowindex":b(t.v),"aria-label":"Brightness "+b(t.v)+"%"},e.createElement(m,{onMove:function(e){n({s:100*e.left,v:100-100*e.top})},onKey:function(e){n({s:s(t.s+100*e.left,0,100),v:s(t.v-100*e.top,0,100)})},role:"gridcell","aria-colcount":100,"aria-colindex":b(t.s),"aria-label":"Saturation "+b(t.s)+"%"},e.createElement(p,{className:"react-colorful__saturation-pointer",top:1-t.v/100,left:t.s/100,color:N(t)})))))}),A=function(e,r){if(e===r)return!0;for(var t in e)if(e[t]!==r[t])return!1;return!0},S=function(e,r){return e.replace(/\s/g,"")===r.replace(/\s/g,"")};function T(e,t,l){var u=i(l),c=o(function(){return e.toHsva(t)}),s=c[0],f=c[1],v=r({color:t,hsva:s});n(function(){if(!e.equal(t,v.current.color)){var r=e.toHsva(t);v.current={hsva:r,color:t},f(r)}},[t,e]),n(function(){var r;A(s,v.current.hsva)||e.equal(r=e.fromHsva(s),v.current.color)||(v.current={hsva:s,color:r},u(r))},[s,e,u]);var d=a(function(e){f(function(r){return Object.assign({},r,e)})},[]);return[s,d]}var F,P="undefined"!=typeof window?l:n,X=function(){return F||("undefined"!=typeof __webpack_nonce__?__webpack_nonce__:void 0)},Y=function(e){F=e},R=new Map,V=function(e){P(function(){var r=e.current?e.current.ownerDocument:document;if(void 0!==r&&!R.has(r)){var t=r.createElement("style");t.innerHTML='.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient{position:absolute;left:0;top:0;right:0;bottom:0}.react-colorful__pointer-fill{width:90%;height:90%}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2);display:flex;justify-content:center;align-items:center}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>\')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}',R.set(r,t);var n=X();n&&t.setAttribute("nonce",n),r.head.appendChild(t)}},[])},$=function(t){var n=t.className,o=t.colorModel,a=t.color,l=void 0===a?o.defaultColor:a,i=t.onChange,s=c(t,["className","colorModel","color","onChange"]),f=r(null);V(f);var v=T(o,l,i),d=v[0],h=v[1],m=g(["react-colorful",n]);return e.createElement("div",u({},s,{ref:f,className:m}),e.createElement(L,{hsva:d,onChange:h}),e.createElement(K,{hue:d.h,onChange:h,className:"react-colorful__last-control"}))},G={defaultColor:"000",toHsva:function(e){return B(x(e))},fromHsva:function(e){return t=(r=q(e)).g,n=r.b,"#"+z(r.r)+z(t)+z(n);var r,t,n},equal:function(e,r){return e.toLowerCase()===r.toLowerCase()||A(x(e),x(r))}},J=function(r){return e.createElement($,u({},r,{colorModel:G}))},Q=function(r){var t=r.className,n=r.hsva,o=r.onChange,a={backgroundImage:"linear-gradient(90deg, "+y(Object.assign({},n,{a:0}))+", "+y(Object.assign({},n,{a:1}))+")"},l=g(["react-colorful__alpha",t]),u=b(100*n.a);return e.createElement("div",{className:l},e.createElement("div",{className:"react-colorful__alpha-gradient",style:a}),e.createElement(m,{onMove:function(e){o({a:e.left})},onKey:function(e){o({a:s(n.a+e.left)})},"aria-label":"Alpha","aria-valuetext":u+"%","aria-valuenow":u,"aria-valuemin":0,"aria-valuemax":100},e.createElement(p,{className:"react-colorful__alpha-pointer",left:n.a,color:y(n)})))},U=function(t){var n=t.className,o=t.colorModel,a=t.color,l=void 0===a?o.defaultColor:a,i=t.onChange,s=c(t,["className","colorModel","color","onChange"]),f=r(null);V(f);var v=T(o,l,i),d=v[0],h=v[1],m=g(["react-colorful",n]);return e.createElement("div",u({},s,{ref:f,className:m}),e.createElement(L,{hsva:d,onChange:h}),e.createElement(K,{hue:d.h,onChange:h}),e.createElement(Q,{hsva:d,onChange:h,className:"react-colorful__last-control"}))},W={defaultColor:{h:0,s:0,l:0,a:1},toHsva:H,fromHsva:M,equal:A},Z=function(r){return e.createElement(U,u({},r,{colorModel:W}))},ee={defaultColor:"hsla(0, 0%, 0%, 1)",toHsva:C,fromHsva:y,equal:S},re=function(r){return e.createElement(U,u({},r,{colorModel:ee}))},te={defaultColor:{h:0,s:0,l:0},toHsva:function(e){return H({h:e.h,s:e.s,l:e.l,a:1})},fromHsva:function(e){return{h:(r=M(e)).h,s:r.s,l:r.l};var r},equal:A},ne=function(r){return e.createElement($,u({},r,{colorModel:te}))},oe={defaultColor:"hsl(0, 0%, 0%)",toHsva:w,fromHsva:N,equal:S},ae=function(r){return e.createElement($,u({},r,{colorModel:oe}))},le={defaultColor:{h:0,s:0,v:0,a:1},toHsva:function(e){return e},fromHsva:D,equal:A},ue=function(r){return e.createElement(U,u({},r,{colorModel:le}))},ce={defaultColor:"hsva(0, 0%, 0%, 1)",toHsva:k,fromHsva:function(e){var r=D(e);return"hsva("+r.h+", "+r.s+"%, "+r.v+"%, "+r.a+")"},equal:S},ie=function(r){return e.createElement(U,u({},r,{colorModel:ce}))},se={defaultColor:{h:0,s:0,v:0},toHsva:function(e){return{h:e.h,s:e.s,v:e.v,a:1}},fromHsva:function(e){var r=D(e);return{h:r.h,s:r.s,v:r.v}},equal:A},fe=function(r){return e.createElement($,u({},r,{colorModel:se}))},ve={defaultColor:"hsv(0, 0%, 0%)",toHsva:O,fromHsva:function(e){var r=D(e);return"hsv("+r.h+", "+r.s+"%, "+r.v+"%)"},equal:S},de=function(r){return e.createElement($,u({},r,{colorModel:ve}))},he={defaultColor:{r:0,g:0,b:0,a:1},toHsva:B,fromHsva:q,equal:A},me=function(r){return e.createElement(U,u({},r,{colorModel:he}))},ge={defaultColor:"rgba(0, 0, 0, 1)",toHsva:I,fromHsva:function(e){var r=q(e);return"rgba("+r.r+", "+r.g+", "+r.b+", "+r.a+")"},equal:S},pe=function(r){return e.createElement(U,u({},r,{colorModel:ge}))},be={defaultColor:{r:0,g:0,b:0},toHsva:function(e){return B({r:e.r,g:e.g,b:e.b,a:1})},fromHsva:function(e){return{r:(r=q(e)).r,g:r.g,b:r.b};var r},equal:A},_e=function(r){return e.createElement($,u({},r,{colorModel:be}))},xe={defaultColor:"rgb(0, 0, 0)",toHsva:j,fromHsva:function(e){var r=q(e);return"rgb("+r.r+", "+r.g+", "+r.b+")"},equal:S},Ee=function(r){return e.createElement($,u({},r,{colorModel:xe}))},Ce=/^#?([0-9A-F]{3,8})$/i,we=function(r){var t=r.color,l=void 0===t?"":t,s=r.onChange,f=r.onBlur,v=r.escape,d=r.validate,h=r.format,m=r.process,g=c(r,["color","onChange","onBlur","escape","validate","format","process"]),p=o(function(){return v(l)}),b=p[0],_=p[1],x=i(s),E=i(f),C=a(function(e){var r=v(e.target.value);_(r),d(r)&&x(m?m(r):r)},[v,m,d,x]),w=a(function(e){d(e.target.value)||_(v(l)),E(e)},[l,v,d,E]);return n(function(){_(v(l))},[l,v]),e.createElement("input",u({},g,{value:h?h(b):b,spellCheck:"false",onChange:C,onBlur:w}))},He=function(e){return"#"+e},Me=function(r){var t=r.prefixed,n=r.alpha,o=c(r,["prefixed","alpha"]),l=a(function(e){return e.replace(/([^0-9A-F]+)/gi,"").substring(0,n?8:6)},[n]),i=a(function(e){return function(e,r){var t=Ce.exec(e),n=t?t[1].length:0;return 3===n||6===n||!!r&&4===n||!!r&&8===n}(e,n)},[n]);return e.createElement(we,u({},o,{escape:l,format:t?He:void 0,process:He,validate:i}))};export{Me as HexColorInput,J as HexColorPicker,ne as HslColorPicker,ae as HslStringColorPicker,Z as HslaColorPicker,re as HslaStringColorPicker,fe as HsvColorPicker,de as HsvStringColorPicker,ue as HsvaColorPicker,ie as HsvaStringColorPicker,_e as RgbColorPicker,Ee as RgbStringColorPicker,me as RgbaColorPicker,pe as RgbaStringColorPicker,Y as setNonce};
//# sourceMappingURL=index.module.js.map
