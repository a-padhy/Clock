const deg = 6;
const hr = document.querySelector("#hr");
const mn = document.querySelector("#mn");
const sc = document.querySelector("#sc");

setInterval(() => {
    let day = new Date();
    let hh = day.getHours();
    let mm = day.getMinutes();
    let ss = day.getSeconds();

    let h = hh * 30;
    let m = mm * deg;
    let s = ss * deg;

    hr.style.transform = `rotateZ(${h + m / 12}deg)`;
    mn.style.transform = `rotateZ(${m}deg)`;
    sc.style.transform = `rotateZ(${s}deg)`;

    let session = "AM";
    
    if(hh == 0){
        hh = 12;
    }
    
    if(hh > 12){
        hh = hh - 12;
        session = "PM";
    }
    
    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;
    
    var time = hh + ":" + mm + ":" + ss + " " + session;
    document.getElementById("DigitalClock").innerText = time;
    document.getElementById("DigitalClock").textContent = time;
}, 1000);






