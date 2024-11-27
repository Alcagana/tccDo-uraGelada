const precos = {
  "Casquinha": 3.00,
  "Cascão": 4.50,
  "Milk Shake": 10.00,
  "Banana Split": 20.00,
  "Sundae Kids": 5.00,
  "Sundae Especial": 6.00,
  "Cupuaçu": 10.00,
  "Açaí": 10.00,
  "Picolé Chocolate": 3.00,
  "Picolé Limão": 2.51,
  "Picolé Morango": 2.52,
  "Picolé Coco": 2.53,
  "Picolé Manga": 2.54,
  "Picolé Frutas Vermelhas": 2.55,
  "Picolé Melancia": 2.56,
  "Picolé Abacaxi": 2.57,
  "Chicletes": 0.50,
  "Balas": 0.25,
  "Água": 2.50,
  "Monster": 12.00,
  "Kuat": 5.00,
  "Fanta": 5.50,
  "Coca-Cola": 6.00,
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
  grandTotalElement.textContent = `Total Geral: R$ ${grandTotal.toFixed(2)}`;
}

// Botão de mais
function increment(product) {
  const quantityElement = document.getElementById(`quantity-${product}`);
  const totalElement = document.getElementById(`total-${product}`);

  const currentQuantity = parseInt(quantityElement.textContent);
  const newQuantity = currentQuantity + 1;
  const total = newQuantity * precos[product];

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
  doc.text(`Total Geral: R$ ${grandTotal.toFixed(2)}`, startX, y + 5);

  // Salvar PDF
  doc.save('relatorio_vendas.pdf');

  // Zerar a tabela
  resetTable();
}

// Inicializar a tabela
createTableRows();
