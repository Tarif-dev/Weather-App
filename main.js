document.addEventListener("DOMContentLoaded",function() {
    const currentDate = new Date();
    
    
    // console.log(currentDate.getDate());
    const formattedDate = currentDate.toLocaleDateString();
    // console.log(formattedDate)
    
    const todaysDate = document.getElementById("Date");
    todaysDate.innerHTML = formattedDate;
    
    function showTime(){
        const currentDate = new Date();
        const timeNow = document.getElementById("Time");
        timeNow.innerHTML = currentDate.toLocaleTimeString();
    }
    showTime();
    
    
    function showGreet(){
        const currentDate = new Date();
        const hour = currentDate.getHours();

        const greet = document.getElementById("Greet");
        if(hour > 12 && hour < 15){
            greet.innerHTML = "Good Afternoon !"
        }else if(hour >= 0 && hour < 12){
            greet.innerHTML = "Good Morning !"
        }else if(hour >= 15 && hour < 21){
            greet.innerHTML = "Good Evening !"
        }else{
            greet.innerHTML = "Good Night !"
        }
    }
    showGreet();


    setInterval(showGreet,1000);
    setInterval(showTime,1000);


    const apiKey = "f37c0c31d7f27ff7da25c54c9dd60dd5";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
    const searchBox = document.getElementById("input");
    const searchButton = document.getElementById("button");


    async function checkWeather(city){
        const response = await fetch(apiUrl + city +`&appid=${apiKey}`);
        var data = await response.json();
        console.log(data);

        document.getElementById("temp").innerHTML = `${data.main.temp}&degc`;
        document.getElementById("city").innerHTML = data.name;
        document.getElementById("wind").innerText = `${data.wind.speed} kmph`;
        document.getElementById("humidity").innerText = `${data.main.humidity} %`;
        document.getElementById("feel").innerHTML = `Feels like ${Math.round(data.main.feels_like)} &degc`;
        document.getElementById("humidity").innerText = `${data.main.humidity} %`;
    }

    checkWeather();


    searchButton.addEventListener("click",()=>{
        checkWeather(searchBox.value)
    })

    document.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            checkWeather(searchBox.value);
        }
    });
    

})



