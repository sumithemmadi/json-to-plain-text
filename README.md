<h1 id="json-to-plain-text"><a href="https://github.com/sumithemmadi/json-to-plain-text">json-to-plain-text</a></h1>

<a href="https://www.npmjs.com/package/json-to-plain-text"><img src="https://img.shields.io/npm/v/json-to-plain-text.svg" alt="Version"></a>
<a href="https://github.com/sumithemmadi/json-to-plain-text/stargazers"><img src="https://img.shields.io/github/stars/sumithemmadi/json-to-plain-text" alt="Stars"></a>
<a href="https://github.com/sumithemmadi/json-to-plain-text"><img src="https://img.shields.io/npm/dt/json-to-plain-text.svg" alt="weekly Download"></a>
<a href="https://github.com/sumithemmadi/json-to-plain-text/blob/main/LICENSE"><img src="https://img.shields.io/npm/l/json-to-plain-text.svg" alt="License"></a>
<a href="https://github.com/sumithemmadi/json-to-plain-text"><img src="https://img.shields.io/npms-io/maintenance-score/json-to-plain-text" alt="Maintenance"></a>
<a href="https://github.com/sumithemmadi/json-to-plain-text/issues"><img src="https://img.shields.io/github/issues/sumithemmadi/json-to-plain-text" alt="issues"></a>
<br>
<p>Convert any json to plain text.</p>

## Installation 

```
npm install json-to-plain-text
```

## Usage

```js
var convert = require('json-to-plain-text');

var jsonData = {
    "place_id": "173937105",
    "osm_type": "way",
    "osm_id": "319992693",
    "lat": "17.861533866867224",
    "lon": "78.8081441896764",
    "display_name": "Satadar Nagar, Ward 116 Allapur, Hyderabad, Kukatpally mandal, Telangana, 500018, India",
    "address": {
        "neighbourhood": "Satadar Nagar",
        "suburb": "Ward 116 Allapur",
        "city": "Hyderabad",
        "county": "Kukatpally mandal",
        "state": "Telangana",
        "postcode": "500018",
        "country": "India",
        "country_code": "in"
    },
    "extratags": {},
    "namedetails": {},
    "boundingbox": [
        "17.8598497",
        "17.8623087",
        "78.8079136",
        "78.8082658"
    ],
    "distance": 2
}

var response = convert.toPlainText(jsonData);
console.log(response);
```

## Output

```yaml
place_id            : 173937105
osm_type            : way
osm_id              : 319992693
lat                 : 17.861533866867224
lon                 : 78.8081441896764
display_name        : Satadar Nagar, Ward 116 Allapur, Hyderabad, Kukatpally mandal, Telangana, 500018, India
address             :
neighbourhood       : Satadar Nagar
suburb              : Ward 116 Allapur
city                : Hyderabad
county              : Kukatpally mandal
state               : Telangana
postcode            : 500018
country             : India
country_code        : in
extratags           : {}
namedetails         : {}
boundingbox         : 17.8598497, 17.8623087, 78.8079136, 78.8082658
distance            : 2
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
