async function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  const resultDiv = document.getElementById("result");

  if (city === "") {
    resultDiv.innerHTML = "<p style='color:red;'>Please enter a city</p>";
    return;
  }

  try {
   
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e656922cad311c49737e8bbd1ccbc9e4&units=metric`
    );

    if (!response.ok) throw new Error("City not found");

    const data = await response.json();

    resultDiv.innerHTML = `
      <h3>${data.name}, ${data.sys.country}</h3>
      <p>🌡 Temperature: ${data.main.temp}°C</p>
      <p>☁ Condition: ${data.weather[0].description}</p>
      <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">
    `;
  } catch (error) {
    resultDiv.innerHTML = `<p style="color:red;">${error.message}</p>`;
  }
}
