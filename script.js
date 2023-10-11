function celsiusToFahrenheit(celsius) {
    var fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
  }
  
  // Contoh penggunaan fungsi
  var suhuCelsius = 25;
  var suhuFahrenheit = celsiusToFahrenheit(suhuCelsius);
  
  console.log(suhuCelsius + "°C sama dengan " + suhuFahrenheit + "°F");