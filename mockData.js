export const PRODUCTS = [
  {
    id: '1',
    name: 'Instant Credit Line via Mutual Funds',
    category: 'Loan Against Mutual Funds',
    image: 'https://via.placeholder.com/150/0052FF/FFFFFF?text=1Fi+Credit',
    variants: ['₹50,000 Limit', '₹1,000,000 Limit', '₹2,500,000 Limit'],
    basePrice: 50000,
    emiPlans: [
      { tenureMonths: 6, monthlyAmount: 8650, interestRate: 10.5 },
      { tenureMonths: 12, monthlyAmount: 4400, interestRate: 10.5 },
      { tenureMonths: 24, monthlyAmount: 2320, interestRate: 11.0 }
    ]
  },
  {
    id: '2',
    name: 'Apple MacBook Pro (Partner Financing)',
    category: 'Consumer Electronics EMI',
    image: 'https://via.placeholder.com/150/333333/FFFFFF?text=MacBook+EMI',
    variants: ['256GB / 8GB RAM', '512GB / 16GB RAM'],
    basePrice: 169900,
    emiPlans: [
      { tenureMonths: 3, monthlyAmount: 56633, interestRate: 0 },
      { tenureMonths: 6, monthlyAmount: 28316, interestRate: 0 },
      { tenureMonths: 12, monthlyAmount: 15100, interestRate: 7.5 }
    ]
  }
];