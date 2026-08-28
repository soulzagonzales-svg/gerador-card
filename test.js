/**
 * Exemplos de uso do CardGenerator
 */

const CardGenerator = require('./index');

console.log('=== GERADOR DE CARTÕES DE CRÉDITO FICTÍCIOS ===\n');

const generator = new CardGenerator();

// Exemplo 1: Gerar um único cartão
console.log('📌 EXEMPLO 1: Um cartão aleatório\n');
const singleCard = generator.generateCard();
console.log(singleCard);
console.log('\n---\n');

// Exemplo 2: Gerar cartão específico (Visa)
console.log('📌 EXEMPLO 2: Cartão Visa\n');
const visaCard = generator.generateCard('Visa');
console.log(visaCard);
console.log('\n---\n');

// Exemplo 3: Gerar cartão MasterCard
console.log('📌 EXEMPLO 3: Cartão MasterCard\n');
const mastercardCard = generator.generateCard('MasterCard');
console.log(mastercardCard);
console.log('\n---\n');

// Exemplo 4: Gerar múltiplos cartões
console.log('📌 EXEMPLO 4: 5 cartões aleatórios\n');
const multipleCards = generator.generateCards(5);
multipleCards.forEach((card, index) => {
  console.log(`Cartão ${index + 1}:`);
  console.log(card);
  console.log('');
});

// Exemplo 5: Componentes individuais
console.log('📌 EXEMPLO 5: Componentes individuais\n');
console.log('Número do cartão:', generator.generateCardNumber('Visa'));
console.log('Titular:', generator.generateCardholderName());
console.log('Validade:', generator.generateExpiryDate());
console.log('CVV:', generator.generateCVV());