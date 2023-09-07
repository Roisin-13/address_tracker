import { API_KEY } from "./key";

const personalIP = () => {
    fetch(`https://geo.ipify.org/api/v2/country?apiKey=${API_KEY}`)
    //("https://geo.ipify.org/api/v2/country?apiKey=at_y0Uo3GDRnO44nShY8y3BTzk6J7tMk&")
        .then((response: Response) => response.json())
        .then((data) => {
            console.log(data);
            let address: HTMLElement | null = document.getElementById("ipAddress");
            address!.innerHTML = data.ip;
            let location: HTMLElement | null = document.getElementById("ipLocation");
            location!.innerHTML = data.location.region + " " + data.location.country;
            let timezone: HTMLElement | null = document.getElementById("ipTimezone");
            timezone!.innerHTML = data.location.timezone;
            let isp: HTMLElement | null = document.getElementById("ipIsp");
            isp!.innerHTML = data.isp;
        })
        .catch((err) => {
            console.log(typeof err, "poop")
            let header: HTMLElement | null = document.getElementById("ipAddress");
            header!.innerHTML = "Can't find address - I'm broken 🥹";
        })
}
personalIP();

