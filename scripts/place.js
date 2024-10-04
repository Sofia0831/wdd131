const currentYear = new Date().getFullYear();

const lastModifiedDate = document.lastModified;

const footerParagraphs = document.querySelector("footer").querySelectorAll("p");
footerParagraphs[0].textContent = `©️ ${currentYear} ⭐ Sofia Florylle S. Pantas ⭐ Philippines`;
footerParagraphs[1].textContent = `Last modified: ${lastModifiedDate}`;


function calculateWindChill(temperature, windSpeed, units) {
    if (isNaN(temperature) || isNaN(windSpeed) || !units) {
      return "N/A";
    }

    let formula = units === "metric" ? "metric" : "imperial";

    if ((formula === "metric" && temperature <= 10 && windSpeed > 4.8) ||
        (formula === "imperial" && temperature <= 50 && windSpeed > 3)) {
  

      if (formula === "metric") {
        return 13.12 + 0.6215 * temperature * (0.3965 * temperature - 11.37) * Math.pow(windSpeed, 0.16);
      } else {
        return 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
      }
    } else {
      return "N/A";   
  
    }
  }


  let temperatureCelsius = 27;
  let windSpeedKmPerHour = 6.4;
  
  // Calculate wind chill
  let windChill = calculateWindChill(temperatureCelsius, windSpeedKmPerHour);
  
  // Display the wind chill in the "Weather" section
  let weatherSection = document.getElementById("windChill");
  weatherSection.innerHTML = `${windChill}`;