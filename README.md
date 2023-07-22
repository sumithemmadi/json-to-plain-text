# json-to-plain-text

`json-to-plain-text` is a npm module that converts JSON-like data or plain JavaScript objects to a formatted plain text representation. It allows you to convert complex data structures into a more human-readable and structured format for better understanding and debugging.

## Installation

1. Install `json-to-plain-text` npm package.

   ```bash
   npm install json-to-plain-text
   ```

2. Import the `jsonToPlainText` function:

   ```typescript
   import { jsonToPlainText } from "json-to-plain-text";
   ```

## Usage

The `jsonToPlainText` function accepts two parameters: `data` and `options`.

### Parameters

- `data` (required): The input data to convert. It can be JSON-like data or plain JavaScript objects.

- `options` (optional): Configuration options for customizing the output. It is an object with the following properties:

  - `color` (boolean, default: `true`): Whether to apply colors to the output or not. Set to `true` to add colors using the `chalk` library or `false` for plain text output.

  - `spacing` (boolean, default: `true`): Whether to include spacing after colons. Set to `true` for formatted spacing or `false` to remove spacing after colons.

  - `squareBracketsForArray` (boolean, default: `false`): Whether to use square brackets for arrays. Set to `true` to enclose arrays in square brackets or `false` to display arrays without brackets.

  - `doubleQuotesForKeys` (boolean, default: `false`): Whether to use double quotes for object keys. Set to `true` to wrap object keys in double quotes or `false` to keep them as they are.

  - `doubleQuotesForValues` (boolean, default: `false`): Whether to use double quotes for string values. Set to `true` to add double quotes around string values or `false` to display them without quotes.

### Example

```typescript
import { jsonToPlainText } from "json-to-plain-text";

const data = {
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

// This is optional
const options = {
  color: true,                      // Whether to apply colors to the output or not
  spacing: true,                    // Whether to include spacing after colons or not
  squareBracketsForArray: false,    // Whether to use square brackets for arrays or not
  doubleQuotesForKeys: false,       // Whether to use double quotes for object keys or not
  doubleQuotesForValues: false,     // Whether to use double quotes for string values or not
}

// Convert the data to formatted plain text representation
const plainText = jsonToPlainText(data, options);

console.log(plainText);
```

### Output

```yaml
place_id      : 173937105
osm_type      : way
osm_id        : 319992693
lat           : 17.861533866867224
lon           : 78.8081441896764
display_name  : Satadar Nagar, Ward 116 Allapur, Hyderabad, Kukatpally mandal, Telangana, 500018, India
address       : 
neighbourhood : Satadar Nagar
suburb        : Ward 116 Allapur
city          : Hyderabad
county        : Kukatpally mandal
state         : Telangana
postcode      : 500018
country       : India
country_code  : in
extratags     : {}
namedetails   : {}
boundingbox   : 17.8598497, 17.8623087, 78.8079136, 78.8082658
distance      : 2
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

- [Sumith Emmadi](https://github.com/sumithemmadi)
