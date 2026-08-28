/**
 * Gerador de Cartões de Crédito Fictícios
 * Apenas para testes e propósitos educacionais
 */

class CardGenerator {
  constructor() {
    this.cardBrands = ['Visa', 'MasterCard', 'American Express', 'Discover'];
  }

  /**
   * Gera um número de cartão válido usando o algoritmo de Luhn
   * @param {string} brand - Marca do cartão (Visa, MasterCard, etc)
   * @returns {string} Número do cartão
   */
  generateCardNumber(brand = 'Visa') {
    let cardNumber = this.getCardPrefix(brand);
    
    // Preencher até 15 dígitos (antes do dígito de verificação)
    while (cardNumber.length < 15) {
      cardNumber += Math.floor(Math.random() * 10);
    }

    // Calcular dígito de verificação (Algoritmo de Luhn)
    const checkDigit = this.calculateLuhnChecksum(cardNumber);
    return cardNumber + checkDigit;
  }

  /**
   * Retorna o prefixo do cartão baseado na marca
   */
  getCardPrefix(brand) {
    const prefixes = {
      'Visa': '4',
      'MasterCard': '5',
      'American Express': '3',
      'Discover': '6'
    };
    return prefixes[brand] || '4';
  }

  /**
   * Calcula o dígito verificador usando o algoritmo de Luhn
   */
  calculateLuhnChecksum(cardNumber) {
    let sum = 0;
    let isEven = false;

    for (let i = cardNumber.length - 1; i >= 0; i--) {
      let digit = parseInt(cardNumber[i]);

      if (isEven) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }

      sum += digit;
      isEven = !isEven;
    }

    return (10 - (sum % 10)) % 10;
  }

  /**
   * Gera um nome do titular fictício
   */
  generateCardholderName() {
    const firstNames = ['Maria', 'João', 'Ana', 'Carlos', 'Juliana', 'Francisco', 'Beatriz', 'Pedro'];
    const lastNames = ['Silva', 'Santos', 'Oliveira', 'Souza', 'Costa', 'Ferreira', 'Gomes', 'Alves'];

    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];

    return `${firstName} ${lastName}`;
  }

  /**
   * Gera uma data de validade
   * @returns {string} Data no formato MM/YY
   */
  generateExpiryDate() {
    const month = String(Math.floor(Math.random() * 12) + 1).padStart(2, '0');
    const year = String(new Date().getFullYear() + Math.floor(Math.random() * 5) + 1).slice(-2);
    return `${month}/${year}`;
  }

  /**
   * Gera um CVV (3 ou 4 dígitos)
   */
  generateCVV(length = 3) {
    return String(Math.floor(Math.random() * Math.pow(10, length))).padStart(length, '0');
  }

  /**
   * Gera um cartão completo fictício
   * @param {string} brand - Marca do cartão
   * @returns {object} Objeto com dados do cartão
   */
  generateCard(brand = 'Visa') {
    return {
      brand: brand,
      cardNumber: this.generateCardNumber(brand),
      cardholderName: this.generateCardholderName(),
      expiryDate: this.generateExpiryDate(),
      cvv: this.generateCVV(),
      createdAt: new Date().toISOString()
    };
  }

  /**
   * Gera múltiplos cartões
   * @param {number} quantity - Quantidade de cartões
   * @returns {array} Array de cartões
   */
  generateCards(quantity = 1) {
    const cards = [];
    for (let i = 0; i < quantity; i++) {
      const randomBrand = this.cardBrands[Math.floor(Math.random() * this.cardBrands.length)];
      cards.push(this.generateCard(randomBrand));
    }
    return cards;
  }
}

module.exports = CardGenerator;