const tempData = {
  labels: [],
  datasets: [{
    label: 'Temperature (°C)',
    borderColor: 'rgb(255, 99, 132)',
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    data: [],
    fill: true,
    tension: 0.4,
  }]
};
const humData = {
  labels: [],
  datasets: [{
    label: 'Humidity (%)',
    borderColor: 'rgb(54, 162, 235)',
    backgroundColor: 'rgba(54, 162, 235, 0.2)',
    data: [],
    fill: true,
    tension: 0.4,
  }]
};
const configTemp = {
  type: 'line',
  data: tempData,
  options: {
    animation: false,
    scales: {
      y: {
        min: 0,
        max: 50
      }
    }
  }
};
const configHum = {
  type: 'line',
  data: humData,
  options: {
    animation: false,
    scales: {
      y: {
        min: 0,
        max: 100
      }
    }
  }
};
const tempChart = new Chart(
  document.getElementById('tempChart'),
  configTemp
);

const humChart = new Chart(
  document.getElementById('humChart'),
  configHum
);
function fetchSensorData() {
  const temp = (20 + Math.random() * 15).toFixed(2);
  const hum = (40 + Math.random() * 50).toFixed(2);
  const now = new Date();
  const timeLabel = now.toLocaleTimeString();
  if (tempData.labels.length > 20) {
    tempData.labels.shift();
    tempData.datasets[0].data.shift();
  }
  tempData.labels.push(timeLabel);
  tempData.datasets[0].data.push(temp);
  tempChart.update();
  if (humData.labels.length > 20) {
    humData.labels.shift();
    humData.datasets[0].data.shift();
  }
  humData.labels.push(timeLabel);
  humData.datasets[0].data.push(hum);
  humChart.update();
  document.getElementById('tempValue').textContent = `${temp} °C`;
  document.getElementById('humValue').textContent = `${hum} %`;
}
setInterval(fetchSensorData, 1000);

