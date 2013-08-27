node-object-to-xml
==================

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