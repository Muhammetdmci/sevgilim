
function formatDate(date) {
  const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
  return date.toLocaleDateString('tr-TR', options);
}

function updateDays() {
  const startDate = new Date('2025-02-08T00:00:00');
  const now = new Date();
  const diffTime = Math.abs(now - startDate);
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  document.getElementById("tarih").textContent = "Tanışma tarihi: " + formatDate(startDate);
  document.getElementById("gunSayisi").textContent = "Bugünle birlikte " + diffDays + " gündür birlikteyiz 💞";
}

setInterval(updateDays, 1000);
updateDays();
