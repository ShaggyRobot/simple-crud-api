(()=>{var e={157:(e,r,n)=>{const t=n(147),o=n(17),s=n(37);function c(e){console.log(`[dotenv][DEBUG] ${e}`)}const p=/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/,i=/\\n/g,a=/\r\n|\n|\r/;function u(e,r){const n=Boolean(r&&r.debug),t={};return e.toString().split(a).forEach((function(e,r){const o=e.match(p);if(null!=o){const e=o[1];let r=o[2]||"";const n=r.length-1,s='"'===r[0]&&'"'===r[n];"'"===r[0]&&"'"===r[n]||s?(r=r.substring(1,n),s&&(r=r.replace(i,"\n"))):r=r.trim(),t[e]=r}else n&&c(`did not match key and value when parsing line ${r+1}: ${e}`)})),t}e.exports.config=function(e){let r=o.resolve(process.cwd(),".env"),n="utf8",p=!1;var i;e&&(null!=e.path&&(r="~"===(i=e.path)[0]?o.join(s.homedir(),i.slice(1)):i),null!=e.encoding&&(n=e.encoding),null!=e.debug&&(p=!0));try{const e=u(t.readFileSync(r,{encoding:n}),{debug:p});return Object.keys(e).forEach((function(r){Object.prototype.hasOwnProperty.call(process.env,r)?p&&c(`"${r}" is already defined in \`process.env\` and will not be overwritten`):process.env[r]=e[r]})),{parsed:e}}catch(e){return{error:e}}},e.exports.parse=u},147:e=>{"use strict";e.exports=require("fs")},685:e=>{"use strict";e.exports=require("http")},37:e=>{"use strict";e.exports=require("os")},17:e=>{"use strict";e.exports=require("path")},310:e=>{"use strict";e.exports=require("url")}},r={};function n(t){var o=r[t];if(void 0!==o)return o.exports;var s=r[t]={exports:{}};return e[t](s,s.exports,n),s.exports}(()=>{var e=n(17),r=n(157),t=n(685),o=n(310);r.config(),process.stdout.write("crunning @ ".concat(e.resolve(__dirname,__filename),"\nport:").concat(process.env.PORT,"\n"));var s=t.createServer((function(e,r){"/person"===o.parse(e.url,!0).pathname&&"GET"===e.method&&(r.writeHead(200,{"Content-Type":"application/json"}),r.end("Beep-beep!"),process.stdout.write("Beep.\n"),e.on("data",(function(e){console.log(JSON.parse(e)),!0===JSON.parse(e).close&&(s.close(),process.exit(42))}))),"/person"===o.parse(e.url,!0).pathname&&e.method,"/person"===o.parse(e.url,!0).pathname&&e.method,"/person"===o.parse(e.url,!0).pathname&&e.method}));s.listen(process.env.PORT)})()})();