var convert = require('..');

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
