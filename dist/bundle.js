(()=>{var e={157:(e,t,n)=>{const r=n(147),o=n(17),i=n(37);function c(e){console.log(`[dotenv][DEBUG] ${e}`)}const a=/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/,s=/\\n/g,u=/\r\n|\n|\r/;function p(e,t){const n=Boolean(t&&t.debug),r={};return e.toString().split(u).forEach((function(e,t){const o=e.match(a);if(null!=o){const e=o[1];let t=o[2]||"";const n=t.length-1,i='"'===t[0]&&'"'===t[n];"'"===t[0]&&"'"===t[n]||i?(t=t.substring(1,n),i&&(t=t.replace(s,"\n"))):t=t.trim(),r[e]=t}else n&&c(`did not match key and value when parsing line ${t+1}: ${e}`)})),r}e.exports.config=function(e){let t=o.resolve(process.cwd(),".env"),n="utf8",a=!1;var s;e&&(null!=e.path&&(t="~"===(s=e.path)[0]?o.join(i.homedir(),s.slice(1)):s),null!=e.encoding&&(n=e.encoding),null!=e.debug&&(a=!0));try{const e=p(r.readFileSync(t,{encoding:n}),{debug:a});return Object.keys(e).forEach((function(t){Object.prototype.hasOwnProperty.call(process.env,t)?a&&c(`"${t}" is already defined in \`process.env\` and will not be overwritten`):process.env[t]=e[t]})),{parsed:e}}catch(e){return{error:e}}},e.exports.parse=p},703:(e,t,n)=>{"use strict";n.r(t),n.d(t,{NIL:()=>j,parse:()=>g,stringify:()=>d,v1:()=>O,v3:()=>h,v4:()=>D,v5:()=>w,validate:()=>u,version:()=>m});const r=require("crypto");var o=n.n(r);const i=new Uint8Array(256);let c=i.length;function a(){return c>i.length-16&&(o().randomFillSync(i),c=0),i.slice(c,c+=16)}const s=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,u=function(e){return"string"==typeof e&&s.test(e)},p=[];for(let e=0;e<256;++e)p.push((e+256).toString(16).substr(1));const d=function(e,t=0){const n=(p[e[t+0]]+p[e[t+1]]+p[e[t+2]]+p[e[t+3]]+"-"+p[e[t+4]]+p[e[t+5]]+"-"+p[e[t+6]]+p[e[t+7]]+"-"+p[e[t+8]]+p[e[t+9]]+"-"+p[e[t+10]]+p[e[t+11]]+p[e[t+12]]+p[e[t+13]]+p[e[t+14]]+p[e[t+15]]).toLowerCase();if(!u(n))throw TypeError("Stringified UUID is invalid");return n};let l,f,y=0,b=0;const O=function(e,t,n){let r=t&&n||0;const o=t||new Array(16);let i=(e=e||{}).node||l,c=void 0!==e.clockseq?e.clockseq:f;if(null==i||null==c){const t=e.random||(e.rng||a)();null==i&&(i=l=[1|t[0],t[1],t[2],t[3],t[4],t[5]]),null==c&&(c=f=16383&(t[6]<<8|t[7]))}let s=void 0!==e.msecs?e.msecs:Date.now(),u=void 0!==e.nsecs?e.nsecs:b+1;const p=s-y+(u-b)/1e4;if(p<0&&void 0===e.clockseq&&(c=c+1&16383),(p<0||s>y)&&void 0===e.nsecs&&(u=0),u>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");y=s,b=u,f=c,s+=122192928e5;const O=(1e4*(268435455&s)+u)%4294967296;o[r++]=O>>>24&255,o[r++]=O>>>16&255,o[r++]=O>>>8&255,o[r++]=255&O;const g=s/4294967296*1e4&268435455;o[r++]=g>>>8&255,o[r++]=255&g,o[r++]=g>>>24&15|16,o[r++]=g>>>16&255,o[r++]=c>>>8|128,o[r++]=255&c;for(let e=0;e<6;++e)o[r+e]=i[e];return t||d(o)},g=function(e){if(!u(e))throw TypeError("Invalid UUID");let t;const n=new Uint8Array(16);return n[0]=(t=parseInt(e.slice(0,8),16))>>>24,n[1]=t>>>16&255,n[2]=t>>>8&255,n[3]=255&t,n[4]=(t=parseInt(e.slice(9,13),16))>>>8,n[5]=255&t,n[6]=(t=parseInt(e.slice(14,18),16))>>>8,n[7]=255&t,n[8]=(t=parseInt(e.slice(19,23),16))>>>8,n[9]=255&t,n[10]=(t=parseInt(e.slice(24,36),16))/1099511627776&255,n[11]=t/4294967296&255,n[12]=t>>>24&255,n[13]=t>>>16&255,n[14]=t>>>8&255,n[15]=255&t,n};function v(e,t,n){function r(e,r,o,i){if("string"==typeof e&&(e=function(e){e=unescape(encodeURIComponent(e));const t=[];for(let n=0;n<e.length;++n)t.push(e.charCodeAt(n));return t}(e)),"string"==typeof r&&(r=g(r)),16!==r.length)throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");let c=new Uint8Array(16+e.length);if(c.set(r),c.set(e,r.length),c=n(c),c[6]=15&c[6]|t,c[8]=63&c[8]|128,o){i=i||0;for(let e=0;e<16;++e)o[i+e]=c[e];return o}return d(c)}try{r.name=e}catch(e){}return r.DNS="6ba7b810-9dad-11d1-80b4-00c04fd430c8",r.URL="6ba7b811-9dad-11d1-80b4-00c04fd430c8",r}const h=v("v3",48,(function(e){return Array.isArray(e)?e=Buffer.from(e):"string"==typeof e&&(e=Buffer.from(e,"utf8")),o().createHash("md5").update(e).digest()})),D=function(e,t,n){const r=(e=e||{}).random||(e.rng||a)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t){n=n||0;for(let e=0;e<16;++e)t[n+e]=r[e];return t}return d(r)},w=v("v5",80,(function(e){return Array.isArray(e)?e=Buffer.from(e):"string"==typeof e&&(e=Buffer.from(e,"utf8")),o().createHash("sha1").update(e).digest()})),j="00000000-0000-0000-0000-000000000000",m=function(e){if(!u(e))throw TypeError("Invalid UUID");return parseInt(e.substr(14,1),16)}},754:e=>{e.exports=[]},562:(e,t,n)=>{var r=n(703).validate;e.exports=function(e,t){e.on("data",(function(){switch(!0){case!r(e.id):t.writeHead(400,{"Content-Type":"application/json"}),t.end('"'.concat(e.id,'" ID IS NOT VALID UUID.'));break;case!e.DB.find((function(t){return t.id===e.id})):t.writeHead(404,{"Content-Type":"application/json"}),t.end('ITEM WITH "'.concat(e.id,'" ID IS NOT FOUND'));break;default:e.DB.map((function(t,n){return t.id===e.id&&e.DB.splice(n,1),!0})),t.writeHead(204,{"Content-Type":"application/json"}),t.end()}}))}},136:(e,t,n)=>{var r=n(703).validate;e.exports=function(e,t){switch(!0){case!e.id:t.writeHead(200,{"Content-Type":"application/json"}),t.end(JSON.stringify(e.DB));break;case!r(e.id):t.writeHead(400,{"Content-Type":"application/json"}),t.end('"'.concat(e.id,'" ID IS NOT VALID UUID.'));break;case!!e.DB.find((function(t){return t.id===e.id})):t.writeHead(200,{"Content-Type":"application/json"}),t.end(JSON.stringify(e.DB.find((function(t){return t.id===e.id}))));break;case!e.DB.find((function(t){return t.id===e.id})):t.writeHead(404,{"Content-Type":"application/json"}),t.end('ITEM WITH "'.concat(e.id,'" ID IS NOT FOUND'))}}},813:(e,t,n)=>{function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i=n(703).v4,c=n(754),a=n(70);e.exports=function(e,t){var n=[],s={};console.log(e.xURL),e.on("data",(function(e){n.push(e)})),e.on("end",(function(){var e=a(n);e.isValid&&(n=Buffer.concat(n).toString(),s=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({id:i()},JSON.parse(n)),c.push(s),t.writeHead(201,{"Content-Type":"application/json"}),t.end(JSON.stringify(s))),t.writeHead(400,{"Content-Type":"application/json"}),t.end(e.msg)}))}},745:(e,t,n)=>{function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i=n(703).validate,c=n(70);e.exports=function(e,t){var n=[];e.on("data",(function(e){n.push(e)})),e.on("end",(function(){n=Buffer.concat(n).toString();var a=c(n);switch(!0){case!i(e.id):t.writeHead(400,{"Content-Type":"application/json"}),t.end('"'.concat(e.id,'" ID IS NOT VALID UUID.'));break;case!a.isValid:t.writeHead(400,{"Content-Type":"application/json"}),t.end("".concat(a.msg));break;case!e.DB.find((function(t){return t.id===e.id})):t.writeHead(404,{"Content-Type":"application/json"}),t.end('ITEM WITH "'.concat(e.id,'" ID IS NOT FOUND'));break;default:e.DB.map((function(t,i){return t.id===e.id&&(console.log(":::",t),e.DB[i]=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({id:e.id},JSON.parse(n))),!0})),t.writeHead(200,{"Content-Type":"application/json"}),t.end(n)}}))}},70:e=>{var t={name:function(e){return"string"==typeof e},age:function(e){return"number"==typeof e},hobbies:function(e){return Array.isArray(e)}};e.exports=function(e){var n="";try{var r=JSON.parse(e);if(!Object.keys(t).every((function(e){return Object.keys(r).includes(e)})))return{isValid:!1,msg:n="REQUEST BODY DOES NOT INCLUDE ALL THE NECESSARY FIELDS (NAME, AGE, HOBBIES)."};if(Object.keys(r).some((function(e){return n=Object.keys(t).includes(e)?'INVALID VALUE FOR "'.concat(e,'" FIELD.'):'INVALID FIELD "'.concat(e,'".'),!Object.keys(t).includes(e)||!t[e](r[e])})))return{isValid:!1,msg:n}}catch(e){return{isValid:!1,msg:n="PARSING REQUEST BODY ERROR :: ".concat(e.message.toUpperCase())}}return{isValid:!0}}},229:e=>{e.exports=function(e){var t=new URL(e.url,"http://".concat(e.headers.host));e.xURL=t;var n=t.pathname.split("/").splice(1);if(n.length>1&&"POST"===e.method)return!1;if("person"!==n[0]||n.length>2)return!1;if(2===n.length){var r=""!==n[1]?n[1]:"NOT SPECIFIED";return e.id=r,!0}return!0}},147:e=>{"use strict";e.exports=require("fs")},685:e=>{"use strict";e.exports=require("http")},37:e=>{"use strict";e.exports=require("os")},17:e=>{"use strict";e.exports=require("path")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e=n(17),t=n(685),r=n(157),o=n(754),i=n(136),c=n(813),a=n(745),s=n(562),u=n(229);r.config();var p=t.createServer();p.on("request",(function(e,t){if(e.DB=o,u(e,t))switch(e.method){case"GET":i(e,t);break;case"POST":c(e,t);break;case"PUT":a(e,t);break;case"DELETE":s(e,t);break;default:t.statusCode=400,t.end('THIS SERVER DOES NOT HANDLE THE "'.concat(e.method,'" METHOD.'))}else t.writeHead(400,{"Content-Type":"application/json"}),t.end("BAD REQUEST :: ".concat(e.method," @ ").concat(e.xURL))})),p.listen(process.env.PORT,(function(t){t?console.error(t.message):console.log("c".concat(e.resolve(__dirname,__filename),"\nlistening @ port:").concat(process.env.PORT))}))})()})();