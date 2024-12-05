const precos = {
"CASQUINHA": 3.00,
"CASCÃO": 4.50,
"MILK SHAKE": 10.00,
"BANANA SPLIT": 20.00,
"SUNDAE KIDS": 5.00,
"SUNDAE ESPECIAL": 6.00,
"CUPUAÇU": 10.00,
"AÇAÍ": 10.00,
"PICOLÉ CHOCOLATE": 3.00,
"PICOLÉ LIMÃO": 2.51,
"PICOLÉ MORANGO": 2.52,
"PICOLÉ COCO": 2.53,
"PICOLÉ MANGA": 2.54,
"PICOLÉ FRUTAS VERMELHAS": 2.55,
"PICOLÉ MELANCIA": 2.56,
"PICOLÉ ABACAXI": 2.57,
"CHICLETES": 0.50,
"BALAS": 0.25,
"ÁGUA": 2.50,
"ENERGÉTICO": 12.00,
"KUAT": 5.00,
"FANTA": 5.50,
"COCA-COLA": 6.00,
};

const tableBody = document.querySelector('#price-table tbody');
const grandTotalElement = document.getElementById('grand-total');
let grandTotal = 0;

// Criar as linhas da tabela
function createTableRows() {
for (const [product, price] of Object.entries(precos)) {
const row = document.createElement('tr');
row.innerHTML = `
<td>${product}</td>
<td>R$ ${price.toFixed(2)}</td>
<td id="quantity-${product}">0</td>
<td id="total-${product}">R$ 0.00</td>
<td class="actions">
<button class="increment">+</button>
<button class="decrement">-</button>
</td>
`;

// Adicionar os event listeners aos botões
row.querySelector('.increment').addEventListener('click', () => increment(product));
row.querySelector('.decrement').addEventListener('click', () => decrement(product));
tableBody.appendChild(row);
}
}

// Atualizar o total geral
function updateGrandTotal() {
grandTotalElement.textContent = `Total: R$ ${grandTotal.toFixed(2)}`;
}

// Botão de mais
function increment(product) {
const quantityElement = document.getElementById(`quantity-${product}`);
const totalElement = document.getElementById(`total-${product}`);
const currentQuantity = parseInt(quantityElement.textContent);
const newQuantity = currentQuantity + 1;const total = newQuantity * precos[product];
quantityElement.textContent = newQuantity;
totalElement.textContent = `R$ ${total.toFixed(2)}`;
grandTotal += precos[product];
updateGrandTotal();
}

// Botão de menos
function decrement(product) {
const quantityElement = document.getElementById(`quantity-${product}`);
const totalElement = document.getElementById(`total-${product}`);
const currentQuantity = parseInt(quantityElement.textContent);
if (currentQuantity > 0) {
const newQuantity = currentQuantity - 1;
const total = newQuantity * precos[product];
quantityElement.textContent = newQuantity;
totalElement.textContent = `R$ ${total.toFixed(2)}`;
grandTotal -= precos[product];
updateGrandTotal();
}
}
// Resetar a tabela
function resetTable() {
  for (const product of Object.keys(precos)) {
    const quantityElement = document.getElementById(`quantity-${product}`);
    const totalElement = document.getElementById(`total-${product}`);

    if (quantityElement && totalElement) {
      quantityElement.textContent = '0';
      totalElement.textContent = 'R$ 0.00';
    }
  }

  // Zerar o total geral
  grandTotal = 0;
  updateGrandTotal();
}

// Gerar PDF
async function generatePDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  // Coloca automaticamente a data atual
  const now = new Date();
  const date = now.toLocaleDateString('pt-BR'); // Formato: dd/mm/aaaa
  const time = now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

  // Coloca título no PDF
  doc.setFontSize(18);
  doc.text('Relatório de Vendas', 105, 20, null, null, 'center');
  doc.setFontSize(12);
  doc.text(`Data: ${date} Hora: ${time}`, 10, 30);

  // Coloca cabeçalho na tabela
  let y = 40;
  doc.setFontSize(10);
  const startX = 10;

  doc.line(startX, y, 200, y); // Linha do cabeçalho
  doc.text('Produto', startX, y - 3);
  doc.text('Preço Unitário', 70, y - 3);
  doc.text('Quantidade', 120, y - 3);
  doc.text('Total', 160, y - 3);
  y += 10;

  // Coloca as linhas na tabela
  for (const [product, price] of Object.entries(precos)) {
    const quantityElement = document.getElementById(`quantity-${product}`);

    if (quantityElement) {
      const quantity = parseInt(quantityElement.textContent);
      const total = quantity * price;

      if (quantity > 0) {
        doc.line(startX, y, 200, y); // Linha horizontal
        doc.text(product, startX, y - 3);
        doc.text(`R$ ${price.toFixed(2)}`, 70, y - 3);
        doc.text(quantity.toString(), 120, y - 3);
        doc.text(`R$ ${total.toFixed(2)}`, 160, y - 3);
        y += 10;
      }
    }
  }
  doc.line(startX, y, 200, y); // Linha final
  y += 5;

  // Total geral
  doc.setFontSize(12);
  doc.text(`Total: R$ ${grandTotal.toFixed(2)}`, startX, y + 5);

  // Salvar PDF
  doc.save('relatorio_vendas.pdf');

  // Zerar a tabela
  resetTable();
}

// Inicializar a tabela
createTableRows();
