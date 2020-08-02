// Import our Controllers
const quoteController = require('../controllers/quoteController')

const routes = [
  {
    method: 'GET',
    url: '/api/quotes',
    handler: quoteController.getQuotes
  },
  {
    method: 'POST',
    url: '/api/quote',
    handler: quoteController.addQuote
  },
  {
    method: 'GET',
    url: '/api/quote/:number',
    handler: quoteController.getQuoteByNumber
  }
]

module.exports = routes
