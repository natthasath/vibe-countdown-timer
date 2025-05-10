let countdown;
let currentValue = 60;
let running = false;

function updateDisplay(val) {
  document.getElementById('countdownDisplay').textContent = val;
}

function startCountdown() {
  if (running) return;
  const input = document.getElementById('startValue');
  let value = parseInt(input.value, 10);
  if (isNaN(value) || value < 1) value = 1;
  currentValue = value;
  updateDisplay(currentValue);
  running = true;
  countdown = setInterval(() => {
    currentValue--;
    updateDisplay(currentValue);
    if (currentValue <= 0) {
      clearInterval(countdown);
      running = false;
      updateDisplay('หมดเวลา!');
    }
  }, 1000);
}

function resetCountdown() {
  clearInterval(countdown);
  running = false;
  const input = document.getElementById('startValue');
  let value = parseInt(input.value, 10);
  if (isNaN(value) || value < 1) value = 1;
  currentValue = value;
  updateDisplay(currentValue);
}

// ตั้งค่าเริ่มต้น
updateDisplay(document.getElementById('startValue').value); 