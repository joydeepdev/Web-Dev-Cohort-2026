# React Reviews Carousel App

A clean and interactive **Reviews Carousel Application** built with **React.js**.  
This project allows users to browse through different reviews using previous/next buttons and also display a random review.

---

## 🚀 Features

- Display user reviews dynamically
- Next & Previous navigation
- Random review generator
- Circular review navigation
- Clean and responsive UI
- React Icons integration
- State management using `useState`

---

## 🛠️ Technologies Used

- React.js
- JavaScript (ES6+)
- CSS3
- React Icons

---

## 📂 Project Structure

```bash
src/
│
├── App.jsx
├── data.js
├── index.css
└── main.jsx
```


---

## 🧠 How It Works

### State Management

The app uses React's `useState` hook to keep track of the currently displayed review.

```js
const [index, setIndex] = useState(0);
```

---

### Navigation Logic

The `checkNumber()` function ensures the review index stays within bounds.

```js
const checkNumber = (number) => {
  if (number > people.length - 1) return 0;
  if (number < 0) return people.length - 1;
  return number;
};
```

---

### Random Review

A random review is selected while preventing the same review from appearing consecutively.

```js
const randomPerson = () => {
  let randomNumber = Math.floor(Math.random() * people.length);

  if (randomNumber === index) {
    randomNumber = index + 1;
  }

  setIndex(checkNumber(randomNumber));
};
```

---

## 🎯 Learning Concepts

This project helps in understanding:

- React Components
- Props & Data Handling
- Array-based UI rendering
- Event Handling
- State Management
- Conditional Logic
- Responsive UI Design

---

## 📦 Dependencies

Install React Icons:

```bash
npm install react-icons
```

---

