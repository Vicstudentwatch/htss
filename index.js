(function() {
    const seconds = 1000,
    min = seconds * 60,
    hour = min * 60;
    day = hour * 24



    let birthday = " May 6,2024 00:00:00",
    countdown = new Date(birthday).getTime(),
    x = setInterval(function(){
        let now = new Date().getTime(),
        margin = countdown - now;

        document.getElementById("days").innerText = Math.floor(margin/(day)),
        document.getElementById("hours").innerText = Math.floor((margin%(day))/(hour)),
        document.getElementById("minutes").innerText = Math.floor((margin%(hour))/(min)),
        document.getElementById("seconds").innerText = Math.floor((margin%(min))/seconds);

        if(margin<0){
            // let headline = document.getElementById("headline"),
            // countdown = document.getElementById("countdown"),
            // content = document.getElementById("content").innerText;
            // countdown.innerText = content;

            // headline.innerText= "Happy Birthday Viona";

            location.href = 'message.html'

            clearInterval(x);
        }
        

    },0)
}())


