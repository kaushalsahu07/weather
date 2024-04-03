let apiKey = '1e3e8f230b6064d27976e41163a82b77';
let url =  `https://api.openweathermap.org/data/2.5/weather?`;

async function loc(){
    let respond = await fetch(url + `lat=${lat}&lon=${lon}&` + `appid=${apiKey}`)
    let data = await respond.json();
    console.log(data)
}

loc()