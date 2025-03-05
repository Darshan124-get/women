let countdownInterval;

function showCountdown() {
    function redirectToSOSPage() {
        window.location.getElementById = "countdown-screen";
    }
    document.getElementById("home-screen").classList.add("hidden");
    document.getElementById("countdown-screen").classList.remove("hidden");

    let timer = 5;
    countdownInterval = setInterval(() => {
        document.getElementById("countdown-timer").innerText = timer;
        timer--;

        if (timer < 0) {
            clearInterval(countdownInterval);
            triggerSOS();
        }
    }, 1000);
}

function triggerSOS() {
    document.getElementById("countdown-screen").classList.add("hidden");
    document.getElementById("sos-triggered-screen").classList.remove("hidden");
}

function cancelSOS() {
    clearInterval(countdownInterval);
    document.getElementById("countdown-screen").classList.add("hidden");
    document.getElementById("home-screen").classList.remove("hidden");
}

function verifyPin() {
    alert("SOS Stopped Successfully!");
}