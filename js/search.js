let apiKey = "1e3e8f230b6064d27976e41163a82b77";
let searchinput = document.querySelector(`.searchinput`);

async function search(city, state, country){
    let url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${state},${country}&appid=${apiKey}`);
    let data = await url.json();
    console.log(data);
    
}


searchinput.addEventListener('keydown', function(event) {
    if (event.keyCode === 13 || event.which === 13) {
        search(searchinput.value);
        console.log("worked")
      }else{
        console.log("not")
      }
  });