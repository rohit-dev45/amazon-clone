# Amazon-inspired shopping frontend

Independent React + Vite educational storefront with responsive product listings, category filters, live search, price sorting, product details, persistent cart, quantity updates, totals in integer paise, and simulated checkout. No Amazon affiliation; no real payment, login, or order service.

## Run
Node.js 20.19+ or 22.12+ and npm:
```sh
npm install
npm run dev
npm test
npm run build
```
Open the URL printed by Vite. Cart state is stored locally in your browser. Products are fictional demo data. Emoji product artwork needs no API key; Google Fonts has system fallbacks.

## Structure
`src/main.jsx`: page flows and product catalog. `src/cart.js`: cart calculations. `src/style.css`: responsive UI. Tests cover cart immutability and currency arithmetic.
