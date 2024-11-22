const rows = document.querySelectorAll('tbody tr');
let total = 0;
rows.forEach(row => {
  const valorTotalCell = row.querySelector('td:last-child');
  total += parseFloat(valorTotalCell.textContent.replace('R$ ', ''));
});
document.getElementById('totalVendas').textContent = total.toFixed(2);