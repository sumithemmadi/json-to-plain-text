<h1 align="center" id="json-to-plain-text"><a href="https://github.com/sumithemmadi/json-to-plain-text">json-to-plain-text</a></h1>

<div align="center">
<a href="https://www.npmjs.com/package/json-to-plain-text"><img src="https://img.shields.io/npm/v/json-to-plain-text.svg" alt="Version"></a>
<a href="https://github.com/sumithemmadi/json-to-plain-text/stargazers"><img src="https://img.shields.io/github/stars/sumithemmadi/json-to-plain-text" alt="Stars"></a>
<a href="https://github.com/sumithemmadi/json-to-plain-text"><img src="https://img.shields.io/npm/dt/json-to-plain-text.svg" alt="weekly Download"></a>
<a href="https://github.com/sumithemmadi/json-to-plain-text/blob/main/LICENSE"><img src="https://img.shields.io/npm/l/json-to-plain-text.svg" alt="License"></a>
<a href="https://github.com/sumithemmadi/json-to-plain-text"><img src="https://img.shields.io/npms-io/maintenance-score/json-to-plain-text" alt="Maintenance"></a>
<a href="https://github.com/sumithemmadi/json-to-plain-text/issues"><img src="https://img.shields.io/github/issues/sumithemmadi/json-to-plain-text" alt="issues"></a>
<br>
<p>Convert any json to plain text.</p>
</div>

## Installation 

```
npm install json-to-plain-text
```

## Usage

```js
var convert = require('json-to-plain-text');

var jsonData = {
        "name": "Sumith Emmadi",
        "phones": [{
                "number": "+000000000000",
                "numberType": "MOBILIE",
                "dialingCode": 91,
                "countryCode": "IN",
                "carrier": "Vodafone Idea",
                "type": "openPhone"
        }],
        "provider": "ss-nu"
}

var response = convert.toPlainText(jsonData);
console.log(response);
```
```yaml
name                : Sumith Emmadi
phones              :
number              : +000000000000
numberType          : MOBILIE
dialingCode         : 91
countryCode         : IN
carrier             : Vodafone Idea
type                : openPhone
provider            : ss-nu
```
## License

MIT License

Copyright (c) 2021 **Emmadi Sumith Kumar**

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
