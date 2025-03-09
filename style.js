let defuser = document.getElementById("defuser");
let timer = document.getElementById("timer");
let countdown = 10;

let uniqueid = setInterval(function() {
    countdown = countdown - 1;
    timer.textContent = countdown;
    if (countdown === 0) {
        timer.textContent = "BOOM";
        clearInterval(uniqueid);
    }
}, 1000)

defuser.addEventListener("keydown", function(event) {
    let bombtext = defuser.value;
    if (event.key === "Enter" && bombtext === "defuse" && countdown !== 0) {
        timer.textContent = "You did it.";
        clearInterval(uniqueid);
    }
})