let circularProgress = document.querySelector(".circular-progress"),
    progressValue = document.querySelector(".progress-value");

let progressStartValue = 0,
    progressEndValue = 60,
    speed = 20;

let progress = setInterval(() => {
    progressStartValue++;

    circularProgress.style.background = `conic-gradient(lightseagreen ${progressStartValue * 3.6}deg, #ededed 0deg)`

    if (progressStartValue == progressEndValue){
        clearInterval(progress)
    }
}, speed);