# Product Listing App

A simple React product listing application with pagination.  
This project fetches products from a public API and displays them in a clean card layout with product details like image, title, category, rating, stock, and price.

## Features

- Fetch products from API
- Pagination support
- Loading state handling
- Responsive product grid
- Product cards with:
  - Image
  - Brand
  - Category
  - Description
  - Rating
  - Stock
  - Price & discount
- Simple and clean UI

## Tech Stack

- React
- JavaScript
- CSS
- npm

## API Used

```bash
https://api.freeapi.app/api/v1/public/randomproducts
```

## Installation

Clone the repository:

```bash
git clone https://github.com/your-username/product-listing-app.git
```

Navigate to the project folder:

```bash
cd product-listing-app
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

## Project Structure

```bash
src/
│── App.jsx
│── App.css
│── main.jsx
```

## How Pagination Works

- Products are fetched page by page
- Each page loads 10 products
- Users can:
  - Navigate using Prev/Next buttons
  - Jump directly to a page number

## Future Improvements

- Search functionality
- Filter by category
- Add to cart feature
- Dark mode
- Better mobile responsiveness

## License

This project is open source and free to use.