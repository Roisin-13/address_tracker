"use strict";
exports.__esModule = true;
var key_js_1 = require("./key.js");
var personalIP = function () {
    fetch("https://geo.ipify.org/api/v2/country?apiKey=".concat(key_js_1.API_KEY))
        //("https://geo.ipify.org/api/v2/country?apiKey=at_y0Uo3GDRnO44nShY8y3BTzk6J7tMk&")
        .then(function (response) { return response.json(); })
        .then(function (data) {
        console.log(data);
        var address = document.getElementById("ipAddress");
        address.innerHTML = data.ip;
        var location = document.getElementById("ipLocation");
        location.innerHTML = data.location.region + " " + data.location.country;
        var timezone = document.getElementById("ipTimezone");
        timezone.innerHTML = data.location.timezone;
        var isp = document.getElementById("ipIsp");
        isp.innerHTML = data.isp;
    })["catch"](function (err) {
        console.log(typeof err, "poop");
        var header = document.getElementById("ipAddress");
        header.innerHTML = "Can't find address - I'm broken 🥹";
    });
};
personalIP();
