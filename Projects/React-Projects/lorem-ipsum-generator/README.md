# Lorem Ipsum Generator

A simple React application that generates Lorem Ipsum paragraphs based on the number selected by the user. The project demonstrates React state management with `useState`, form handling, controlled inputs, array manipulation using `slice()`, and dynamic rendering of content.

## Features

* Generate a custom number of Lorem Ipsum paragraphs
* User-friendly number input with minimum and maximum limits
* Dynamic rendering using React state
* Responsive and clean UI built with Tailwind CSS
* Controlled form inputs
* Paragraph generation without page reload

## Technologies Used

* React
* JavaScript (ES6+)
* Tailwind CSS
* Nano ID

## How It Works

1. The user enters the number of paragraphs to generate.
2. On form submission, the application prevents the default page refresh behavior.
3. The selected number is used to slice the Lorem Ipsum data array.
4. The resulting paragraphs are stored in state and rendered on the page.

## Project Structure

```text
src/
├── App.jsx
├── data.js
└── main.jsx
```

### Files

* **App.jsx** – Main application component containing state, form handling, and rendering logic.
* **data.js** – Stores the Lorem Ipsum paragraph data.
* **main.jsx** – React application entry point.


## Concepts Practiced

* React Hooks (`useState`)
* Controlled Components
* Event Handling
* Conditional Rendering
* Array Methods (`slice`, `map`)
* Form Submission
* Tailwind CSS Styling


## Learning Outcomes

This project helped reinforce:

* Managing state in React
* Working with forms and user input
* Rendering lists dynamically
* Creating reusable and responsive UI components
* Styling React applications using Tailwind CSS
