const button = document.getElementById("submit");

button.addEventListener("click", async () => {
    const inputvalue = document.getElementById("search").value;
    const apiKey = "596dea924bc4300e11ae4dcd9d868554";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputvalue}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Network response was not ok " + response.statusText);
        }
        const data = await response.json();
        
        const result = document.querySelector("div.result");
        const cityName = document.getElementById("city-name");
        const temp = document.getElementById("temperature");
        const description = document.getElementById("description");

        result.style.display = "block";
        cityName.textContent = data.name;
        temp.textContent = `${data.main.temp} °C`;
        description.textContent = data.weather[0].description;
    } catch (error) {
        console.error("There has been a problem with your fetch operation:", error);
    }
});