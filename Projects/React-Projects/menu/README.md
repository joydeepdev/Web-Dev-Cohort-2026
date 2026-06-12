# React Menu App

A simple and responsive menu filtering application built with **React** and **Tailwind CSS**. Users can filter menu items by category and view dishes in a clean card-based layout.

## Features

* Display menu items dynamically from a data file
* Filter items by category
* Responsive grid layout
* Reusable React components
* Styled with Tailwind CSS
* Category buttons generated automatically from data

## Tech Stack

* React
* JavaScript (ES6+)
* Tailwind CSS
* Vite

## Project Structure

```text
src/
├── App.jsx
├── data.js
├── Categories.jsx
├── Menu.jsx
├── MenuItem.jsx
└── Title.jsx

public/ 
└── images/ 
 ├── item-1.jpg 
 ├── item-2.jpg 
 ├── item-3.jpg 
 └── ...
```

## Components

### App

* Manages application state
* Handles menu filtering logic
* Passes data to child components

### Categories

* Displays filter buttons
* Calls filtering function when a category is selected

### Menu

* Renders a list of menu items

### MenuItem

* Displays individual menu cards
* Shows image, title, price, and description

### Title

* Reusable section heading component

## How It Works

1. Menu data is imported from `data.js`.
2. Unique categories are generated using JavaScript `Set`.
3. Clicking a category button filters menu items.
4. Selecting **All** displays every menu item.

Example:

```javascript
const allCategories = [
  'all',
  ...new Set(menu.map((item) => item.category)),
];
```

## Learning Outcomes

This project demonstrates:

* React component composition
* Props and state management
* Array methods (`map`, `filter`)
* Dynamic UI rendering
* Using JavaScript Set for unique values
* Tailwind CSS utility classes
* Responsive design principles


## License

This project is open source and available under the MIT License.
