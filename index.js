const batteryBatches = [4, 5, 3, 4, 6, 5];

const totalBatteries = batteryBatches.reduce(function (accumulator, batch) {
  return accumulator + batch;
}, 0);