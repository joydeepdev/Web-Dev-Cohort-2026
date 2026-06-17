# 🎨 Colour Palette Generator

Generate beautiful colour palettes instantly from any hex colour code. Built with React, Tailwind CSS, and Values.js.

## 🚀 Features

* Generate shades and tints from any colour
* Interactive colour picker
* Manual hex code input
* One-click copy to clipboard
* Toast notifications for user feedback
* Responsive design for mobile, tablet, and desktop
* Clean and modern UI built with Tailwind CSS

## 🛠️ Technologies Used

* React
* Tailwind CSS
* Values.js
* React Toastify

## 🎯 Usage

1. Select a colour using the colour picker.
2. Or enter a valid hex colour code manually.
3. Click **Generate**.
4. Browse the generated shades and tints.
5. Click any colour card to copy its hex value to the clipboard.

## 📂 Project Structure

```text
src/
├── App.jsx
├── Form.jsx
├── ColourList.jsx
├── SingleColour.jsx
└── main.jsx
```

## 🔍 How It Works

The application uses Values.js to generate multiple variations of a selected colour.

Example:

```javascript
const colours = new Values('#f15025').all(10);
```

This generates a collection of tints and shades at 10% intervals.

## 📱 Responsive Design

The application is fully responsive and adapts to:

* Mobile devices
* Tablets
* Laptops
* Desktop screens





