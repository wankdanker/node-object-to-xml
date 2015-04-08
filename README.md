node-object-to-xml
==================

[![Build Status](https://travis-ci.org/wankdanker/node-object-to-xml.svg)](https://travis-ci.org/wankdanker/node-object-to-xml)

Convert any JavaScript object to XML

install
-------

```bash
npm install object-to-xml
```

usage
-----


```js
var o2x = require('object-to-xml');

var obj = { 
  '?xml version=\"1.0\" encoding=\"iso-8859-1\"?' : null,
  request : {
    '@' : {
      type : 'product',
      id : 12344556
    },
    '#' : {
      query : {
        vendor : 'redhat',
        name : 'linux'
      }
    }
  }
};

console.log(o2x(obj));

/*
<?xml version="1.0" encoding="iso-8859-1"?>
<request type="product" id="12344556">
  <query>
    <vendor>redhat</vendor>
    <name>linux</name>
  </query>
</request>
*/
```

license
-------

### The MIT License (MIT)


Copyright (c) 2013 Daniel L. VerWeire

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
