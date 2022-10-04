var convert = require("..");

var jsonData = {
  place_id: "173937105",
  osm_type: "way",
  osm_id: "319992693",
  lat: "17.861533866867224",
  lon: "78.8081441896764",
  display_name:
    "Satadar Nagar, Ward 116 Allapur, Hyderabad, Kukatpally mandal, Telangana, 500018, India",
  address: {
    neighbourhood: "Satadar Nagar",
    suburb: "Ward 116 Allapur",
    city: "Hyderabad",
    county: "Kukatpally mandal",
    state: "Telangana",
    postcode: "500018",
    country: "India",
    country_code: "in",
  },
  extratags: {},
  namedetails: {},
  boundingbox: ["17.8598497", "17.8623087", "78.8079136", "78.8082658"],
  distance: 2,
};

var response = convert.toPlainText(jsonData);
console.log(response);
