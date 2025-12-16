# React Shopping Cart Application

A modern ReactJS-based Shopping Cart application built as part of the Grafyn AI (Vistora AI) Web Development Assignment.
The application allows users to browse products, add them to a cart, manage quantities, and view real-time cart summaries with persistence.

## Objective

To build a simple e-commerce shopping cart application using ReactJS that supports:
- Adding and removing items
- Updating item quantities
- Dynamic total calculation
- Global cart state management
- Persistent cart data across refreshes

## Features

### Product Listing
- Displays products with:
  - Product name
  - Price
  - Image
  - Description
- Products fetched dynamically from FakeStore API

### Shopping Cart
- Add items to cart
- Remove items from cart
- Increment / decrement item quantity
- Per-item subtotal calculation
- Dynamic total amount calculation
- Total items count (quantity-aware)

### State Management
- Global cart state managed using Redux Toolkit
- Clean separation of UI and business logic

### Persistence (Bonus Feature)
- Cart state saved in localStorage
- Cart data persists even after page refresh

### UI / UX
- Responsive layout using Tailwind CSS
- Interactive feedback using react-hot-toast
- Smooth quantity updates and visual cart badge

## Tech Stack
- ReactJS
- Redux Toolkit
- React Router DOM
- Tailwind CSS
- FakeStore API
- LocalStorage
- React Icons

## Project Structure
```bash
src/
│
├── components/
│   ├── Navbar.jsx
│   ├── Product.jsx
│   ├── CartItem.jsx
│   └── Spinner.jsx
│
├── pages/
│   ├── Home.jsx
│   └── Cart.jsx
│
├── redux/
│   ├── Store.js
│   └── Slices/
│       └── CartSlice.js
│
├── App.jsx
├── index.js
└── index.css
```

## Installation & Setup

### Clone the repository
```bash
git clone <your-repo-link>
```

### Navigate to project directory
```bash
cd shopping-cart
```

### Install dependencies
```bash
npm install
```

### Run the application
```bash
npm start
```

### Open browser at:
```bash
http://localhost:3000
```