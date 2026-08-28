# Gerador de Cartões de Crédito 💳

Um gerador de cartões de crédito **fictícios** para testes e propósitos educacionais.

⚠️ **AVISO IMPORTANTE**: Este projeto gera dados FALSOS apenas para testes. Nunca use em ambientes de produção com dados reais.

## Características

✅ Gera números de cartão válidos (usando algoritmo de Luhn)  
✅ Suporta Visa, MasterCard, American Express e Discover  
✅ Gera nomes fictícios de titulares  
✅ Gera datas de validade  
✅ Gera CVV válido  
✅ Modo em lote (múltiplos cartões)  

## Instalação

```bash
git clone https://github.com/soulzagonzales-svg/gerador-card.git
cd gerador-card
```

Não há dependências externas! Funciona com Node.js puro.

## Uso

### Exemplo Básico

```javascript
const CardGenerator = require('./index');

const generator = new CardGenerator();

// Gerar um cartão
const card = generator.generateCard();
console.log(card);
```

### Saída Esperada

```javascript
{
  brand: 'Visa',
  cardNumber: '4532123456789012',
  cardholderName: 'Maria Silva',
  expiryDate: '12/27',
  cvv: '456',
  createdAt: '2026-08-28T10:30:00.000Z'
}
```

### Exemplos de Uso

#### 1. Gerar um cartão específico

```javascript
const visaCard = generator.generateCard('Visa');
const mastercardCard = generator.generateCard('MasterCard');
const amexCard = generator.generateCard('American Express');
```

#### 2. Gerar múltiplos cartões

```javascript
const cards = generator.generateCards(10);
console.log(cards); // Array com 10 cartões
```

#### 3. Componentes individuais

```javascript
const cardNumber = generator.generateCardNumber('Visa');
const name = generator.generateCardholderName();
const expiry = generator.generateExpiryDate();
const cvv = generator.generateCVV();
```

#### 4. Rodar exemplos

```bash
node test.js
```

## API

### `generateCard(brand)`
Gera um cartão completo fictício.

**Parâmetros:**
- `brand` (string, opcional): 'Visa', 'MasterCard', 'American Express', 'Discover'

**Retorna:** Objeto com dados do cartão

### `generateCards(quantity)`
Gera múltiplos cartões.

**Parâmetros:**
- `quantity` (number, opcional): Quantidade de cartões (padrão: 1)

**Retorna:** Array de cartões

### `generateCardNumber(brand)`
Gera apenas o número do cartão.

### `generateCardholderName()`
Gera um nome fictício.

### `generateExpiryDate()`
Gera uma data de validade (MM/YY).

### `generateCVV(length)`
Gera um CVV (3 ou 4 dígitos).

## Estrutura do Projeto

```
gerador-card/
├── index.js          # Classe principal
├── test.js           # Exemplos de uso
├── package.json      # Configuração do projeto
└── README.md         # Este arquivo
```

## Algoritmo de Luhn

O gerador implementa o algoritmo de Luhn para validar números de cartão. Isso garante que os números gerados são estruturalmente válidos, embora não funcionem em sistemas reais.

## Casos de Uso

- ✅ Testes de integração com APIs de pagamento
- ✅ Testes de validação de formulários
- ✅ Desenvolvimento e prototipagem
- ✅ Fins educacionais
- ✅ Testes de performance

## ⚠️ Aviso Legal

- Este projeto é **APENAS** para fins educacionais e de teste
- Os cartões gerados são fictícios e não funcionam
- Nunca use dados reais de cartões em testes
- Use responsavelmente e dentro das regulamentações locais

## Licença

MIT

---

**Desenvolvido com ❤️ para testes e desenvolvimento**