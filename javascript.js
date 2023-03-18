console.log("connected")
setInterval(() => {
    let time = new Date();
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();
    let hr = 30 * h + m / 2;
    let mr = 6 * m;
    let sr = 6 * s;
    hour.style.transform = `rotate(${hr}deg)`
    min.style.transform = `rotate(${mr}deg)`
    sec.style.transform = `rotate(${sr}deg)`
}, 1000);