let startTime;
let running = false;
let interval;

function startStop() {
    if (running) {
        clearInterval(interval);
        document.getElementById("startStop").textContent = "Start";
    } else {
        startTime = Date.now() - (startTime ? startTime : 0);
        interval = setInterval(updateTime, 10);
        document.getElementById("startStop").textContent = "Stop";
    }
    running = !running;
}

function updateTime() {
    const currentTime = new Date(Date.now() - startTime);
    const hours = String(currentTime.getUTCHours()).padStart(2, '0');
    const minutes = String(currentTime.getUTCMinutes()).padStart(2, '0');
    const seconds = String(currentTime.getUTCSeconds()).padStart(2, '0');
    const milliseconds = String(currentTime.getUTCMilliseconds()).padStart(3, '0');
    document.getElementById("display").textContent = `${hours}:${minutes}:${seconds}.${milliseconds}`;
}

function reset() {
    clearInterval(interval);
    running = false;
    document.getElementById("startStop").textContent = "Start";
    document.getElementById("display").textContent = "00:00:00.00";
    startTime = null;
}